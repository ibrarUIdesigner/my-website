export type FirebaseResource = "projects" | "blogs";

function baseUrl(resource: FirebaseResource): string {
  return `https://portfolio-e626d-default-rtdb.firebaseio.com/${resource}.json`;
}

function itemUrl(resource: FirebaseResource, id: string): string {
  return `https://portfolio-e626d-default-rtdb.firebaseio.com/${resource}/${encodeURIComponent(id)}.json`;
}

function withAuth(url: string): string {
  const token = typeof window !== "undefined" ? localStorage.getItem("firebaseToken") : null;
  if (token) {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}auth=${encodeURIComponent(token)}`;
  }
  return url;
}

export async function list<T>(resource: FirebaseResource): Promise<Array<T & { id?: string }>> {
  const res = await fetch(withAuth(baseUrl(resource)));
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (Array.isArray(data)) return data.filter(Boolean);
  if (data && typeof data === "object") {
    return Object.entries(data).map(([key, val]) => ({ id: key, ...(val as T) }));
  }
  return [];
}

export async function get<T>(resource: FirebaseResource, id: string): Promise<T | null> {
  const res = await fetch(withAuth(itemUrl(resource, id)));
  if (!res.ok) return null;
  const data = await res.json();
  return data as T;
}

export async function upsert<T extends { id?: string }>(resource: FirebaseResource, item: T): Promise<string> {
  // If item has id, PUT to that location; else POST to collection and set id field
  if (item.id) {
    const res = await fetch(withAuth(itemUrl(resource, item.id)), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return item.id;
  } else {
    const res = await fetch(withAuth(baseUrl(resource)), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const newId = data.name as string;
    // Persist id field for convenience
    await fetch(withAuth(itemUrl(resource, newId)), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, id: newId }),
    });
    return newId;
  }
}

export async function remove(resource: FirebaseResource, id: string): Promise<void> {
  const res = await fetch(withAuth(itemUrl(resource, id)), { method: "DELETE" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

export async function getCounts(): Promise<{ projects: number; blogs: number }> {
  const [projects, blogs] = await Promise.all([list("projects"), list("blogs")]);
  return { projects: projects.length, blogs: blogs.length };
}

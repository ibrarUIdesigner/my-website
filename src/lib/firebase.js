function baseUrl(resource) {
    return `https://portfolio-e626d-default-rtdb.firebaseio.com/${resource}.json`;
}
function itemUrl(resource, id) {
    return `https://portfolio-e626d-default-rtdb.firebaseio.com/${resource}/${encodeURIComponent(id)}.json`;
}
function withAuth(url) {
    const token = typeof window !== "undefined" ? localStorage.getItem("firebaseToken") : null;
    if (token) {
        const sep = url.includes("?") ? "&" : "?";
        return `${url}${sep}auth=${encodeURIComponent(token)}`;
    }
    return url;
}
export async function list(resource) {
    const res = await fetch(withAuth(baseUrl(resource)));
    if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data))
        return data.filter(Boolean);
    if (data && typeof data === "object") {
        return Object.entries(data).map(([key, val]) => ({ id: key, ...val }));
    }
    return [];
}
export async function get(resource, id) {
    const res = await fetch(withAuth(itemUrl(resource, id)));
    if (!res.ok)
        return null;
    const data = await res.json();
    return data;
}
export async function upsert(resource, item) {
    // If item has id, PUT to that location; else POST to collection and set id field
    if (item.id) {
        const res = await fetch(withAuth(itemUrl(resource, item.id)), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        return item.id;
    }
    else {
        const res = await fetch(withAuth(baseUrl(resource)), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const newId = data.name;
        // Persist id field for convenience
        await fetch(withAuth(itemUrl(resource, newId)), {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...item, id: newId }),
        });
        return newId;
    }
}
export async function remove(resource, id) {
    const res = await fetch(withAuth(itemUrl(resource, id)), { method: "DELETE" });
    if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
}
export async function getCounts() {
    const [projects, blogs] = await Promise.all([list("projects"), list("blogs")]);
    return { projects: projects.length, blogs: blogs.length };
}

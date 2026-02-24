export async function uploadToCloudinary(file: File): Promise<string> {
  const cloud =
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ||
    localStorage.getItem("cloudinary_cloud_name") ||
    "";
  const preset =
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ||
    localStorage.getItem("cloudinary_upload_preset") ||
    "";
  if (!cloud || !preset) return "";
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", preset);
  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/upload`, {
      method: "POST",
      body: form,
    });
    if (!res.ok) return "";
    const data = await res.json();
    return (data.secure_url as string) || (data.url as string) || "";
  } catch {
    return "";
  }
}

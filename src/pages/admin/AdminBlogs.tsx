import { useEffect, useState } from "react";
import type { JSX } from "react";
import AdminLayout from "../../components/AdminLayout";
import BentoCard from "../../components/BentoCard";
import StatsRow from "../../components/StatsRow";
import { list, upsert, remove } from "../../lib/firebase";
import { uploadToCloudinary } from "../../lib/cloudinary";
import Wysiwyg from "../../components/Wysiwyg";

type Blog = {
  id?: string;
  name: string;
  introduction: string;
  description: string;
  imageUrl?: string;
};

export default function AdminBlogs(): JSX.Element {
  const [items, setItems] = useState<Array<Blog>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = () => {
    setLoading(true);
    list<Blog>("blogs")
      .then(setItems)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refresh();
  }, []);

  const startCreate = () =>
    setEditing({ name: "", introduction: "", description: "", imageUrl: "" });
  const startEdit = (b: Blog) => setEditing({ ...b });
  const cancelEdit = () => setEditing(null);
  const saveEdit = async () => {
    if (!editing) return;
    if (!editing.name || !editing.description) {
      setError("Please provide a title and description.");
      return;
    }
    const id = await upsert<Blog>("blogs", editing);
    setEditing(null);
    setError(null);
    refresh();
  };
  const deleteItem = async (id?: string) => {
    if (!id) return;
    await remove("blogs", id);
    refresh();
  };

  return (
    <AdminLayout title="Blogs">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between border-b border-slate-800 pb-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Blogs
          </h1>
          <button
            className="px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300"
            onClick={startCreate}
          >
            New Blog
          </button>
        </div>

        {editing && (
          <BentoCard className="p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  name
                </span>
                <input
                  type="text"
                  value={editing.name ?? ""}
                  onChange={(e) =>
                    setEditing({ ...editing, name: e.target.value })
                  }
                  className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  cover image
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const f = e.target.files?.[0];
                      if (f) {
                        setUploading(true);
                        setError(null);
                        const url = await uploadToCloudinary(f);
                        if (url) {
                          setEditing({ ...editing, imageUrl: url });
                        } else {
                          setError(
                            "Image upload failed. Check Cloudinary config."
                          );
                        }
                        setUploading(false);
                      }
                    }}
                    className="text-xs w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                  />
                </div>
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                introduction
              </span>
              <textarea
                rows={3}
                value={editing.introduction ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, introduction: e.target.value })
                }
                className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
              />
            </label>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                description
              </span>
              <Wysiwyg
                value={editing.description ?? ""}
                onChange={(html) =>
                  setEditing({ ...editing, description: html })
                }
                placeholder="Write your post..."
              />
            </label>
            {error && <div className="mt-3 text-xs text-red-400">{error}</div>}
            <div className="mt-4 flex gap-3">
              <button
                className="px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase"
                onClick={saveEdit}
                disabled={uploading}
              >
                {uploading ? "Uploading…" : "Save"}
              </button>
              <button
                className="px-4 py-2 rounded-md border border-slate-800 text-xs font-bold tracking-wider uppercase text-slate-400"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          </BentoCard>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <BentoCard key={i} className="h-64 animate-pulse" />
              ))
            : items.map((b) => (
                <BentoCard
                  key={b.id ?? b.name}
                  className="p-5 flex flex-col gap-3"
                >
                  <div className="text-sm font-bold text-white">{b.name}</div>
                  <div className="text-xs text-slate-500 line-clamp-3">
                    {b.introduction}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      className="px-3 py-1 rounded border border-slate-800 text-xs text-slate-300 hover:text-white"
                      onClick={() => startEdit(b)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 rounded border border-red-700 text-xs text-red-400 hover:text-red-300"
                      onClick={() => deleteItem(b.id)}
                    >
                      Delete
                    </button>
                  </div>
                </BentoCard>
              ))}
        </div>
        <StatsRow />
      </div>
    </AdminLayout>
  );
}

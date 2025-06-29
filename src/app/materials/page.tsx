"use client";
import { useState } from "react";

interface Material {
  id: number;
  title: string;
  note: string;
}

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const addMaterial = () => {
    if (!title.trim()) return;
    setMaterials([
      ...materials,
      { id: Date.now(), title: title.trim(), note: note.trim() },
    ]);
    setTitle("");
    setNote("");
  };

  const deleteMaterial = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-zinc-900 dark:to-emerald-950 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-emerald-600 dark:text-emerald-300 mb-6 text-center">مواد الدراسه</h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            className="flex-1 rounded-full px-4 py-2 border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            type="text"
            placeholder="اسم المادة أو المرجع..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            className="flex-1 rounded-full px-4 py-2 border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            type="text"
            placeholder="ملاحظات أو وصف مختصر (اختياري)"
            value={note}
            onChange={e => setNote(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addMaterial()}
          />
          <button
            className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 font-semibold transition"
            onClick={addMaterial}
          >
            إضافة
          </button>
        </div>
        <ul className="space-y-3">
          {materials.length === 0 && (
            <li className="text-center text-gray-400">لا توجد مواد بعد</li>
          )}
          {materials.map(material => (
            <li
              key={material.id}
              className="flex items-center justify-between rounded-xl px-4 py-3 bg-emerald-50 dark:bg-zinc-800 shadow transition"
            >
              <span className="flex-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-300">{material.title}</span>
                {material.note && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
                <span className="text-gray-600 dark:text-gray-300">{material.note}</span>
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-700 transition"
                onClick={() => deleteMaterial(material.id)}
                aria-label="حذف"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

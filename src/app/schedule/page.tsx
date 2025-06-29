"use client";
import { useState } from "react";

interface ScheduleItem {
  id: number;
  subject: string;
  time: string;
}

export default function SchedulePage() {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  const addItem = () => {
    if (!subject.trim() || !time.trim()) return;
    setItems([
      ...items,
      { id: Date.now(), subject: subject.trim(), time: time.trim() },
    ]);
    setSubject("");
    setTime("");
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 dark:from-zinc-900 dark:to-fuchsia-950 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-fuchsia-600 dark:text-fuchsia-300 mb-6 text-center">جدولي الدراسي</h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            className="flex-1 rounded-full px-4 py-2 border border-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            type="text"
            placeholder="اسم المادة أو النشاط..."
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <input
            className="flex-1 rounded-full px-4 py-2 border border-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            type="text"
            placeholder="الوقت (مثال: 8:00 ص)"
            value={time}
            onChange={e => setTime(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addItem()}
          />
          <button
            className="rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-2 font-semibold transition"
            onClick={addItem}
          >
            إضافة
          </button>
        </div>
        <ul className="space-y-3">
          {items.length === 0 && (
            <li className="text-center text-gray-400">لا يوجد جدول بعد</li>
          )}
          {items.map(item => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl px-4 py-3 bg-fuchsia-50 dark:bg-zinc-800 shadow transition"
            >
              <span className="flex-1">
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-300">{item.subject}</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600 dark:text-gray-300">{item.time}</span>
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-700 transition"
                onClick={() => deleteItem(item.id)}
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

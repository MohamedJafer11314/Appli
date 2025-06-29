"use client";
import { useState, useEffect } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const addTask = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input.trim() })
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setInput("");
    setLoading(false);
  };

  const toggleTask = async (id: number, done: boolean) => {
    setLoading(true);
    await fetch("/tasks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, done: !done })
    });
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    setLoading(false);
  };

  const deleteTask = async (id: number) => {
    setLoading(true);
    await fetch("/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    setTasks(tasks.filter(t => t.id !== id));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-blue-950 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-6 text-center animate-fade-in">مهامي اليوميه</h1>
        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 rounded-full px-4 py-2 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-all duration-300"
            type="text"
            placeholder="أضف مهمة جديدة..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addTask()}
            disabled={loading}
          />
          <button
            className={`rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={addTask}
            disabled={loading}
          >
            {loading ? "..." : "إضافة"}
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.length === 0 && (
            <li className="text-center text-gray-400 animate-fade-in">لا توجد مهام بعد</li>
          )}
          {tasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center justify-between rounded-xl px-4 py-3 bg-blue-50 dark:bg-zinc-800 shadow transition-all duration-300 group ${task.done ? "opacity-60 line-through" : ""} animate-slide-in`}
            >
              <span
                className="flex-1 cursor-pointer select-none"
                onClick={() => toggleTask(task.id, task.done)}
              >
                {task.text}
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                onClick={() => deleteTask(task.id)}
                aria-label="حذف المهمة"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease;
        }
        @keyframes slide-in {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.5s cubic-bezier(.4,2,.6,1) both;
        }
      `}</style>
    </div>
  );
}

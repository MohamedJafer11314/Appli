"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f] flex flex-col items-center justify-center p-6 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg mb-2 animate-slide-in">
          MohamedAI
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto animate-fade-in">
          أنجز مهامك اليومية، نظم جدولك الدراسي، واحتفظ بموادك الدراسية في مكان واحد أنيق وحصري.
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Daily Tasks */}
        <section className="bg-white/80 dark:bg-zinc-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center border-t-4 border-blue-400 animate-slide-in hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300 drop-shadow">مهامي اليوميه</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">أضف وتابع مهامك اليومية بسهولة ووضوح.</p>
          <button
            className="mt-auto w-44 sm:w-56 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-lg shadow-xl tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
            onClick={() => window.location.href = "/tasks"}
          >
            إدارة المهام
          </button>
        </section>
        {/* Study Schedule */}
        <section className="bg-white/80 dark:bg-zinc-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center border-t-4 border-fuchsia-400 animate-slide-in hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-600 dark:text-fuchsia-300 drop-shadow">جدولي الدراسي</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">نظم جدولك الدراسي بطريقة عصرية ومرتبة.</p>
          <button
            className="mt-auto w-44 sm:w-56 px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 hover:from-fuchsia-600 hover:to-fuchsia-500 text-white font-bold text-lg shadow-xl tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-200 dark:focus:ring-fuchsia-800"
            onClick={() => window.location.href = "/schedule"}
          >
            إدارة الجدول
          </button>
        </section>
        {/* Study Materials */}
        <section className="bg-white/80 dark:bg-zinc-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center border-t-4 border-emerald-400 animate-slide-in hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-300 drop-shadow">مواد الدراسه</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">أضف واحتفظ بموادك الدراسية بشكل أنيق وسهل الوصول.</p>
          <button
            className="mt-auto w-44 sm:w-56 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold text-lg shadow-xl tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-800"
            onClick={() => window.location.href = "/materials"}
          >
            إدارة المواد
          </button>
        </section>
      </main>
      {/* زر العودة للخلف */}
      <button
        className="fixed bottom-8 left-8 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-zinc-800 dark:to-zinc-700 text-gray-700 dark:text-gray-200 rounded-full px-8 py-4 shadow-2xl hover:scale-110 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-all duration-300 text-lg z-50 animate-fade-in border border-gray-300 dark:border-zinc-600"
        onClick={() => window.history.back()}
      >
        ⬅ العودة للخلف
      </button>
      <footer className="mt-16 text-gray-400 text-xs text-center select-none">
        &copy; {new Date().getFullYear()} حصريًا | MohamedAI
      </footer>
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

import { ShoppingCart, HeartPulse } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500 text-white">
            <HeartPulse className="w-5 h-5" />
          </span>
          <span className="font-semibold tracking-tight text-lg">PulseRing</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-black dark:hover:text-white transition">Features</a>
          <a href="#science" className="hover:text-black dark:hover:text-white transition">Science</a>
          <a href="#reviews" className="hover:text-black dark:hover:text-white transition">Reviews</a>
          <a href="#buy" className="hover:text-black dark:hover:text-white transition">Buy</a>
        </nav>

        <a href="#buy" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm hover:shadow-md transition">
          <ShoppingCart className="w-4 h-4" />
          <span>Buy now</span>
        </a>
      </div>
    </header>
  );
}

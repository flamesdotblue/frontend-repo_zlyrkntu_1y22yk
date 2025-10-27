import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white grid place-items-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 text-lg">
            PulseRing
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#science" className="hover:text-slate-900 transition">Science</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 font-medium shadow hover:shadow-md hover:-translate-y-0.5 transition">
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
}

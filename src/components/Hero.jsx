import { motion } from "framer-motion";
import { Activity, HeartPulse, Moon } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-600 mb-4 shadow-sm">
            <HeartPulse className="h-4 w-4 text-rose-500" />
            <span>Optimized for Health & Fitness</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            A smarter ring for a stronger you
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Track recovery, sleep, and training readiness with medical‑grade
            sensors packed into a minimal, water‑resistant ring. Make every day
            your best day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Buy PulseRing
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 font-medium bg-white/70 backdrop-blur hover:bg-white transition"
            >
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Activity className="h-4 w-4 text-indigo-600" />
              <span>24/7 Activity</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Moon className="h-4 w-4 text-violet-600" />
              <span>Advanced Sleep</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <HeartPulse className="h-4 w-4 text-rose-600" />
              <span>HR & Readiness</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto w-full aspect-square max-w-md">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-200 via-violet-200 to-pink-200 blur-2xl opacity-70 rounded-full" />
            <div className="relative h-full w-full rounded-3xl bg-white shadow-2xl border border-slate-200 grid place-items-center">
              {/* Ring visual */}
              <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 shadow-inner border border-slate-200 grid place-items-center">
                <div className="absolute inset-6 rounded-full border-8 border-slate-300/70" />
                <div className="absolute inset-10 rounded-full border-4 border-slate-200/70" />
                <div className="absolute inset-0 rounded-full ring-8 ring-black/5" />
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

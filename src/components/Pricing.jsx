import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

const perks = [
  "Medical‑grade sensors",
  "All‑day battery (up to 7 days)",
  "Sleep, Readiness & Activity scores",
  "Water resistant up to 100m",
  "iOS & Android app included",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Choose your PulseRing
          </h2>
          <p className="mt-3 text-slate-600">
            Simple pricing with everything included. No hidden fees.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">Standard</h3>
            <p className="mt-2 text-slate-600">Everything you need to start optimizing your health.</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-extrabold text-slate-900">$199</span>
              <span className="text-slate-500 mb-1">one‑time</span>
            </div>
            <ul className="mt-6 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                id="buy"
                href="#checkout"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Buy Now
              </a>
              <p className="mt-3 text-xs text-slate-500 text-center">
                30‑day returns. Free shipping.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-slate-900">Elite Care Plan</h3>
            </div>
            <p className="mt-2 text-slate-600">
              Extend your coverage and get priority support and replacement.
            </p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-extrabold text-slate-900">$29</span>
              <span className="text-slate-500 mb-1">per year</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "2‑year extended warranty",
                "Accidental damage protection",
                "Priority support",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#checkout"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 font-medium bg-white hover:bg-slate-50 transition"
              >
                Add Plan
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

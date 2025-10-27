import { motion } from "framer-motion";
import { Activity, Brain, Moon, Shield, HeartPulse } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Readiness Score",
    desc: "Understand when to push and when to recover with a daily score that blends HRV, resting HR, and sleep insights.",
  },
  {
    icon: Moon,
    title: "Sleep Stages",
    desc: "Get a detailed timeline of your night including REM, Deep, and Light sleep to optimize recovery.",
  },
  {
    icon: Activity,
    title: "Automatic Activity",
    desc: "Detect workouts automatically and see effort, calories, and time-in-zone without lifting a finger.",
  },
  {
    icon: Shield,
    title: "Water & Scratch Resistant",
    desc: "Premium titanium finish that’s swim‑proof and ready for everyday wear.",
  },
  {
    icon: Brain,
    title: "Guided Sessions",
    desc: "Short breathing and focus exercises to reduce stress and improve recovery.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything you need to own your day
          </h2>
          <p className="mt-3 text-slate-600">
            Advanced sensors and thoughtful software work together to turn data
            into decisions you can act on.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

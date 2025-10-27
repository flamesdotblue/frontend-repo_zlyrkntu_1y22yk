import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ava R.",
    role: "Marathoner",
    text: "My coach and I use the readiness score to plan sessions. I've PR'd twice since switching to PulseRing.",
    rating: 5,
  },
  {
    name: "Jordan M.",
    role: "Designer",
    text: "I wanted the health features of a smartwatch without the look. This ring nails both form and function.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "New parent",
    text: "Sleep insights helped me rebuild my routine. The gentle nudges to wind down actually work.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by athletes and everyday achievers</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Real results from real people using PulseRing daily.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="relative rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
              <Quote className="absolute -top-3 -left-3 w-6 h-6 text-rose-400/60" />
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {r.name}
                <span className="text-neutral-500 font-normal"> • {r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

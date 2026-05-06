import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [day, setDay] = useState(1);

  const data = {
    1: {
      title: "Day 1 — Boho North Goa Trail",
      subtitle: "Arambol • Mandrem • Morjim",
      description:
        "Start your journey in the soulful, artistic side of North Goa. Think golden sands, hippie markets, slow sunsets, and peaceful beach energy.",
      highlights: [
        "Sunrise at Arambol Beach with live drum circles",
        "Sweet Water Lake hidden behind palm hills",
        "Hippie Market lanes with handmade crafts & music",
        "Relaxed beach cafés in Mandrem",
        "Morjim’s calm coastline & luxury beach shacks",
      ],
      vibe: "Free-spirited • Artistic • Calm luxury",
    },
    2: {
      title: "Day 2 — Vagator Nightlife Experience",
      subtitle: "Chapora Fort • Chapora Lane • Vagator",
      description:
        "As the sun sets, Goa transforms. This day is about golden hour views, cliffside stories, and electric nightlife energy.",
      highlights: [
        "Sunset at Chapora Fort overlooking the Arabian Sea",
        "Cliff views and cinematic skyline moments",
        "Chapora Lane nightlife walk — neon lights & indie bars",
        "Late-night cafés, rooftop lounges & DJ sets",
        "Immersive crowd: travelers, creators, musicians",
      ],
      vibe: "Electric • Social • High-energy luxury",
    },
    3: {
      title: "Day 3 — Heritage & Scenic Goa",
      subtitle: "Sinquerim • Old Goa • Dona Paula",
      description:
        "A refined blend of history, architecture, and panoramic coastal views—perfect for a slow luxury finale.",
      highlights: [
        "Fort Aguada views over endless ocean horizon",
        "Old Goa churches with UNESCO heritage architecture",
        "Basilica of Bom Jesus cultural experience",
        "Dona Paula viewpoint sunset romance",
        "Peaceful coastal drive through South Goa vibes",
      ],
      vibe: "Cultural • Elegant • Scenic luxury",
    },
  };

  const current = data[day];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Goa Luxury Travel Guide
          </h1>
          <p className="mt-4 text-zinc-300 max-w-xl mx-auto">
            A curated 3-day premium experience blending beaches, nightlife, and heritage.
          </p>
        </motion.div>
      </div>

      {/* Day Selector */}
      <div className="flex justify-center gap-3 -mt-10 relative z-10">
        {[1, 2, 3].map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              day === d
                ? "bg-white text-black"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            Day {d}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-widest text-zinc-400">
            {current.subtitle}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            {current.title}
          </h2>

          <p className="text-zinc-300 mt-4 leading-relaxed">
            {current.description}
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-zinc-300">
                {current.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-4">Travel Vibe</h3>
              <p className="text-zinc-300 text-lg">{current.vibe}</p>

              <div className="mt-6 text-sm text-zinc-400">
                Designed for premium travelers, creators & experience seekers.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
        Curated Goa Experience • Premium Travel Itinerary UI
      </div>
    </div>
  );
}

import { motion } from 'framer-motion'
import { Camera, Video, Home, Sparkles, Utensils, Brush, Music, Calendar } from 'lucide-react'

const categories = [
  { name: 'Photographer', icon: Camera },
  { name: 'Videographer', icon: Video },
  { name: 'Venue', icon: Home },
  { name: 'Decorator', icon: Sparkles },
  { name: 'Caterer', icon: Utensils },
  { name: 'Makeup Artist', icon: Brush },
  { name: 'DJ & Music', icon: Music },
  { name: 'Event Planner', icon: Calendar },
]

export default function Categories() {
  return (
    <section id="vendors" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Vendor Categories
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {categories.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-violet-400/30" />
              <div className="relative flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center">
                  <Icon className="text-violet-300 group-hover:rotate-3 transition-transform" />
                </div>
                <div>
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-xs text-slate-400">Tap to explore</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const vendors = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Vendor ${i + 1}`,
  role: ['Photographer', 'Caterer', 'Decorator', 'DJ'][i % 4],
  image: `https://images.unsplash.com/photo-15${30 + i}?.auto=format&fit=crop&w=800&q=60`,
}))

export default function FeaturedVendors() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Featured Vendors
        </motion.h2>

        <div className="mt-12 overflow-hidden">
          <div className="[--duration:40s] [--gap:24px] relative">
            <div className="flex gap-6 animate-[marquee_var(--duration)_linear_infinite] hover:[animation-play-state:paused]">
              {[...vendors, ...vendors].map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-64 shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <div className="h-36 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20" />
                  <div className="p-4">
                    <div className="text-white font-semibold">{v.name}</div>
                    <div className="text-xs text-slate-400">{v.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}

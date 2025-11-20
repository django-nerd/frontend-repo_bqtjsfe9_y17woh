import { motion } from 'framer-motion'
import { Search, Compare, MessageSquare, CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Explore vendors', icon: Search, desc: 'Find top-rated professionals near you.' },
  { title: 'Compare services', icon: Compare, desc: 'Transparent pricing and packages.' },
  { title: 'Chat instantly', icon: MessageSquare, desc: 'Connect and discuss details in real-time.' },
  { title: 'Book with confidence', icon: CheckCircle2, desc: 'Secure bookings with verified vendors.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          How It Works
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="text-violet-300 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
                <p className="mt-1 text-slate-300 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

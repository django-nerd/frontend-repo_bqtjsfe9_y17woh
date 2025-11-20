import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ava Thompson',
    text: 'Eventory made planning our wedding effortless. We found our dream venue and an amazing photographer in minutes.'
  },
  {
    name: 'Liam Patel',
    text: 'Loved the chat feature — we got quotes and availability instantly. Booked with confidence!'
  },
  {
    name: 'Sofia Martinez',
    text: 'The vendor profiles and reviews helped us compare quickly. Highly recommend.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Loved by Planners Everywhere
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 animate-[float_6s_ease-in-out_infinite] pointer-events-none" />
              <p className="text-slate-200">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-400">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
      `}</style>
    </section>
  )
}

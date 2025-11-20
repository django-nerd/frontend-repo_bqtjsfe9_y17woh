import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 p-[1px]"
        >
          <div className="rounded-3xl bg-slate-950 px-8 py-14">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Start Planning Your Perfect Event Today</h3>
            <p className="mt-2 text-slate-300">Find trusted vendors and book with confidence.</p>
            <div className="mt-6">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 hover:scale-[1.02] active:scale-[.98] transition">
                Get Started
              </a>
            </div>
          </div>
          <ConfettiBG />
        </motion.div>
      </div>
    </section>
  )
}

function ConfettiBG() {
  const pieces = Array.from({ length: 24 })
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute top-1/2 left-1/2 h-1 w-1 rounded-sm bg-white/70"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * (360 / 24)}deg) translateX(${80 + (i % 5) * 12}px)`,
            animation: `confetti 6s ease-in-out ${i * 120}ms infinite`,
            opacity: 0.6,
          }}
        />
      ))}
      <style>{`@keyframes confetti { 0%,100%{ transform: translate(-50%,-50%) scale(1)} 50%{ transform: translate(-50%,-50%) scale(1.1)} }`}</style>
    </div>
  )
}

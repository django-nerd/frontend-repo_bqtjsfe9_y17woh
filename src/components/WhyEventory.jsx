import { motion } from 'framer-motion'

export default function WhyEventory() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white">Why Eventory</h3>
          <p className="mt-4 text-slate-300">
            A single home for discovering, comparing, and booking the best event vendors. Verified profiles, transparent
            pricing, and instant communication streamline every step.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Verified reviews and ratings</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" /> Secure payments and escrow</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Smart matching for your needs</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative h-[360px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_30%_30%,rgba(255,255,255,0.12),transparent)]" />
          <div className="absolute inset-0 animate-[float_10s_ease-in-out_infinite] bg-[url('https://assets-global.website-files.com/641%2Frings.svg')] bg-center bg-no-repeat opacity-30" />
        </motion.div>
      </div>
    </section>
  )
}

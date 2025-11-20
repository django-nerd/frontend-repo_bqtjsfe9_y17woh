import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  // Mouse-follow circles
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })
  const glowX = useTransform(sx, (v) => `${v}px`)
  const glowY = useTransform(sy, (v) => `${v}px`)

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - rect.left - rect.width / 2)
    my.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        {/* parallax gradient and particles */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(14,165,233,0.12),transparent)]" />
        <motion.div style={{ x: glowX, y: glowY }} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="relative py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl tracking-tight font-extrabold text-white"
          >
            Plan Events. Discover Vendors. All in One Place.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 text-lg md:text-xl text-slate-300"
          >
            Eventory connects you with the best photographers, caterers, venues, decorators, and planners instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#vendors"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-medium shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:shadow-[0_14px_34px_rgba(168,85,247,0.55)] transition-shadow"
            >
              <span className="relative z-10">Explore Vendors</span>
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a
              href="#list"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 transition"
            >
              List Your Business
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 rounded-3xl ring-1 ring-white/10 overflow-hidden bg-white/5"
          >
            {/* 3D hero animation via Spline (lightweight embed) */}
            <Spline scene="https://prod.spline.design/9J1t2Yx0ccf-hero/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

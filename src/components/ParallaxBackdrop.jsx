import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo } from 'react'

export default function ParallaxBackdrop() {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 1000], [0, -80])
  const yMed = useTransform(scrollY, [0, 1000], [0, -160])
  const yFast = useTransform(scrollY, [0, 1000], [0, -260])

  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 63) % 100}%`,
      top: `${(i * 37) % 100}%`,
      size: 6 + ((i * 7) % 16),
      blur: 12 + ((i * 3) % 18),
      opacity: 0.06 + ((i % 5) * 0.03),
    }))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: ySlow }} className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[42rem] w-[42rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </motion.div>

      <motion.div style={{ y: yMed }} className="absolute inset-0">
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute bottom-24 left-1/5 h-60 w-60 rounded-full bg-violet-400/10 blur-2xl" />
      </motion.div>

      <motion.div style={{ y: yFast }} className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="rounded-full bg-white"
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  )
}

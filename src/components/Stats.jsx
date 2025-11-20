import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCounter(target = 1000, duration = 1200) {
  const [value, setValue] = useState(0)
  const start = performance.now()
  useEffect(() => {
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

const items = [
  { label: 'Active Vendors', value: 12480 },
  { label: 'Bookings Made', value: 87234 },
  { label: 'Cities Covered', value: 96 },
  { label: 'Avg. Rating', value: 4.8, suffix: '★' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const value = useCounter(inView ? it.value : 0, 1200)
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  {it.suffix ? (
                    <>
                      {value}
                      <span className="text-violet-300 ml-1">{it.suffix}</span>
                    </>
                  ) : (
                    value.toLocaleString()
                  )}
                </div>
                <div className="mt-2 text-sm text-slate-300">{it.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Sun, Moon, Sparkles } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 dark:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition"
    >
      <motion.span
        key={dark ? 'moon' : 'sun'}
        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-amber-300"
      >
        {dark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Vendors', 'How it works', 'Why Eventory']

  return (
    <motion.nav
      initial={false}
      animate={{
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(2,6,23,0.55)' : 'rgba(2,6,23,0)',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative"
            >
              <Sparkles className="text-violet-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
            </motion.div>
            <span className="font-semibold tracking-tight text-white">Eventory</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="group relative text-sm text-slate-300 hover:text-white transition"
              >
                {l}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10">
              <Menu size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.nav>
  )
}

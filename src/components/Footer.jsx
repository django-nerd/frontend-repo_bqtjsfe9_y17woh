import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 text-center text-slate-400"
      >
        © {new Date().getFullYear()} Eventory. All rights reserved.
      </motion.div>
    </footer>
  )
}

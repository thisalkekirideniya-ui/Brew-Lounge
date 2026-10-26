import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHero({ title, eyebrow, image }) {
  return (
    <section className="relative flex h-[70vh] min-h-[460px] items-center justify-center overflow-hidden">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/80 via-coffee-900/60 to-coffee-900/90" />
      <div className="relative px-5 text-center">
        <motion.p
          className="font-script text-3xl text-sage-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 font-serif text-5xl font-semibold text-cream-50 md:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-cream-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/" className="hover:text-gold-400">Home</Link>
          <span className="text-gold-400">/</span>
          <span className="text-gold-400">{title}</span>
        </motion.div>
      </div>
    </section>
  )
}

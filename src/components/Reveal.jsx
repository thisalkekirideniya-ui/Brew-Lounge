import { motion } from 'framer-motion'

const dirs = { up: { y: 50 }, down: { y: -50 }, left: { x: 60 }, right: { x: -60 }, none: {} }

export default function Reveal({ children, delay = 0, dir = 'up', className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dirs[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, title, text, center = true, light = false }) {
  return (
    <Reveal className={`mb-10 max-w-2xl md:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`heading mt-2 ${light ? '!text-cream-50' : ''}`}>{title}</h2>
      <div className={`mt-5 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-gold-400" />
        <span className="h-2 w-2 rotate-45 bg-gold-400" />
        <span className="h-px w-10 bg-gold-400" />
      </div>
      {text && <p className={`mt-5 leading-relaxed ${light ? 'text-cream-200' : 'text-coffee-500'}`}>{text}</p>}
    </Reveal>
  )
}

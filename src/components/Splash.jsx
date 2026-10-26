import { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1]

// Floating coffee beans: [left %, top %, size px, rotation, delay]
const beans = [
  [8, 18, 34, 20, 0], [18, 72, 22, -30, 0.4], [30, 10, 18, 60, 0.8], [72, 14, 28, -15, 0.2],
  [86, 32, 40, 45, 0.6], [80, 78, 26, 10, 1], [62, 88, 18, -50, 0.3], [6, 48, 20, 80, 0.9],
  [44, 92, 24, 30, 0.5], [92, 60, 16, -70, 0.7],
]

function Bean({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <ellipse cx="20" cy="20" rx="13" ry="18" fill="#6F4428" />
      <ellipse cx="20" cy="20" rx="13" ry="18" fill="url(#beanShine)" />
      <path d="M20 3 C 13 14, 27 26, 20 37" fill="none" stroke="#2E1A10" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function Cup() {
  const body = 'M45 78 H155 L149 138 Q145 166 118 166 H82 Q55 166 51 138 Z'
  return (
    <svg viewBox="0 0 220 220" className="h-56 w-56 overflow-visible md:h-72 md:w-72">
      <defs>
        <clipPath id="cupClip"><path d={body} /></clipPath>
        <linearGradient id="coffee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8B5E3C" />
          <stop offset="1" stopColor="#2E1A10" />
        </linearGradient>
        <radialGradient id="beanShine" cx="35%" cy="30%" r="60%">
          <stop offset="0" stopColor="#B08968" stopOpacity="0.7" />
          <stop offset="1" stopColor="#B08968" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* steam */}
      {[78, 100, 122].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 66 C ${x - 12} 52, ${x + 12} 42, ${x} 28 S ${x - 8} 10, ${x + 2} 0`}
          fill="none"
          stroke="#F5EFE6"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 0.8, 0], y: [6, -4, -14] }}
          transition={{ delay: 1.7 + i * 0.25, duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* liquid with two moving waves */}
      <g clipPath="url(#cupClip)">
        <motion.g initial={{ y: 170 }} animate={{ y: 84 }} transition={{ delay: 0.5, duration: 2, ease: [0.45, 0, 0.2, 1] }}>
          <motion.path
            d="M0 8 Q25 0 50 8 T100 8 T150 8 T200 8 T250 8 T300 8 T350 8 T400 8 V120 H0 Z"
            fill="#C29A4F"
            opacity="0.85"
            animate={{ x: [-100, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M0 12 Q25 4 50 12 T100 12 T150 12 T200 12 T250 12 T300 12 T350 12 T400 12 V120 H0 Z"
            fill="url(#coffee)"
            animate={{ x: [0, -100] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.g>
      </g>

      {/* cup outline, handle and saucer draw themselves */}
      <motion.path
        d={body}
        fill="none"
        stroke="#F5EFE6"
        strokeWidth="4"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M154 92 Q186 90 182 116 Q178 140 148 140"
        fill="none"
        stroke="#9DBB7E"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
      />
      <motion.path
        d="M30 180 Q110 196 190 180"
        fill="none"
        stroke="#F5EFE6"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
      />
    </svg>
  )
}

export default function Splash() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const c = animate(0, 100, { duration: 3, ease: [0.45, 0, 0.2, 1], onUpdate: (v) => setPct(Math.round(v)) })
    return () => c.stop()
  }, [])

  const word = 'Brew lounge'.split('')

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      exit={{ y: '-100%' }}
      transition={{ duration: 1.1, ease }}
    >
      <div className="grain relative flex h-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#462818_0%,#1C100A_70%)]">
        {/* glow */}
        <motion.div
          className="absolute h-[34rem] w-[34rem] rounded-full bg-gold-500/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* floating beans */}
        {beans.map(([l, t, s, r, d], i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${l}%`, top: `${t}%` }}
            initial={{ opacity: 0, scale: 0, rotate: r - 90 }}
            animate={{ opacity: 0.7, scale: 1, rotate: r, y: [0, -18, 0] }}
            transition={{
              opacity: { delay: d, duration: 0.8 },
              scale: { delay: d, duration: 0.8, type: 'spring' },
              rotate: { delay: d, duration: 1.2 },
              y: { delay: d, duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Bean size={s} />
          </motion.div>
        ))}

        {/* orbit rings */}
        <div className="relative grid place-items-center">
          <motion.div
            className="absolute h-80 w-80 rounded-full border border-gold-400/25 md:h-[26rem] md:w-[26rem]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ scale: { duration: 1.2, ease }, opacity: { duration: 1.2 }, rotate: { duration: 14, repeat: Infinity, ease: 'linear' } }}
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_20px_#D4AF6A]" />
          </motion.div>
          <motion.div
            className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-sage-400/30 md:h-[30rem] md:w-[30rem]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: -360 }}
            transition={{ scale: { duration: 1.4, ease }, opacity: { duration: 1.4 }, rotate: { duration: 22, repeat: Infinity, ease: 'linear' } }}
          >
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-sage-400" />
          </motion.div>
          <Cup />
        </div>

        {/* brand name, letter by letter */}
        <h1 className="relative mt-6 flex font-script text-6xl text-cream-50 md:text-7xl" aria-label="Brew lounge">
          {word.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)', rotate: -10 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotate: 0 }}
              transition={{ delay: 1.2 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="relative mt-1 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <motion.span className="h-px bg-sage-400" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 2.1, duration: 0.8 }} />
          <span className="font-script text-2xl text-sage-400">by Zoe</span>
          <motion.span className="h-px bg-sage-400" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 2.1, duration: 0.8 }} />
        </motion.div>
        <motion.p
          className="relative mt-5 text-[11px] uppercase tracking-[0.6em] text-gold-400"
          initial={{ opacity: 0, letterSpacing: '1.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ delay: 2.3, duration: 1 }}
        >
          Premium Coffee · Colombo
        </motion.p>

        {/* progress */}
        <div className="absolute bottom-10 left-5 right-5 flex items-end justify-between sm:left-10 sm:right-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream-300/60">Brewing your experience</p>
          <p className="font-serif text-5xl font-semibold tabular-nums text-cream-50 md:text-6xl">
            {pct}<span className="text-2xl text-gold-400">%</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-cream-50/5">
          <div className="h-full bg-gradient-to-r from-sage-400 via-gold-400 to-coffee-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* curved bottom edge visible while the curtain lifts */}
      <svg className="absolute left-0 top-full h-24 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 0 H100 V0 Q50 20 0 0 Z" fill="#1C100A" />
      </svg>
    </motion.div>
  )
}

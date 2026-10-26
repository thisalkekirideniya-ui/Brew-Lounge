import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Coffee } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-coffee-900 px-5 text-center">
      <div className="absolute h-[30rem] w-[30rem] rounded-full bg-gold-500/15 blur-[120px]" />
      <div className="relative">
        <div className="flex items-center justify-center font-serif text-[6.5rem] font-bold leading-none text-cream-50 sm:text-[9rem] md:text-[13rem]">
          <span>4</span>
          <motion.span
            className="mx-2 grid h-20 w-20 place-items-center rounded-full bg-gold-400 text-coffee-900 sm:h-28 sm:w-28 md:h-40 md:w-40"
            animate={{ rotate: [0, -12, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Coffee className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20" />
          </motion.span>
          <span>4</span>
        </div>
        <p className="mt-6 font-script text-3xl text-sage-300 sm:text-4xl">Oops, this cup is empty</p>
        <p className="mx-auto mt-4 max-w-md text-cream-200">The page you’re looking for has wandered off for a coffee break. Let’s get you back to the lounge.</p>
        <Link to="/" className="btn-primary mt-10 !bg-gold-500 !text-coffee-900 hover:!bg-gold-400">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  )
}

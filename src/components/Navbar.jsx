import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LogoMark, Wordmark } from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Our Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled || open
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream-50/90 py-3 shadow-lg shadow-coffee-900/5 backdrop-blur-md' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark className="h-10 w-10 shadow-md sm:h-12 sm:w-12" />
          <Wordmark light={!solid} />
        </Link>

        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `group relative text-sm font-medium uppercase tracking-widest transition-colors ${
                    solid ? 'text-coffee-700 hover:text-coffee-500' : 'text-cream-50 hover:text-gold-400'
                  } ${isActive ? '!text-gold-500' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/reservation" className={`hidden xl:inline-flex ${solid ? 'btn-primary' : 'btn-outline text-cream-50'}`}>
          Reserve a Table
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`xl:hidden ${solid ? 'text-coffee-700' : 'text-cream-50'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-x max-h-[calc(100svh-4.5rem)] overflow-y-auto xl:hidden"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <NavLink
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `block border-b border-coffee-300/30 py-4 font-serif text-xl ${isActive ? 'text-gold-500' : 'text-coffee-700'}`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.li>
            ))}
            <li className="py-5">
              <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react'
import { LogoMark } from './Logo'
import { contact } from '../data/content'

const navLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Our Products'],
  ['/gallery', 'Gallery'],
  ['/events', 'Events'],
  ['/reservation', 'Reservation'],
  ['/contact', 'Contact Us'],
]

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-coffee-900 text-cream-200">
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-16 w-16" />
            <div>
              <p className="font-script text-3xl text-cream-50">Brew lounge</p>
              <p className="font-script text-sage-400">by Zoe</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-cream-300/80">
            A premium coffee lounge in the heart of Colombo, where Ceylon heritage meets the craft of specialty coffee.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/20 transition hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-400 hover:text-coffee-900"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl text-cream-50">Explore</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {navLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="inline-block transition-all hover:translate-x-2 hover:text-gold-400">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-cream-50">Visit Us</h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-gold-400" />{contact.address}</li>
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-gold-400" />{contact.phone}</li>
            <li className="flex gap-3"><Mail size={18} className="shrink-0 text-gold-400" />{contact.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-cream-50">Opening Hours</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {contact.hours.map(([d, h]) => (
              <li key={d} className="flex gap-3">
                <Clock size={18} className="shrink-0 text-gold-400" />
                <span><span className="block text-cream-50">{d}</span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-300/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Brew Lounge by Zoe. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-coffee-900 transition hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

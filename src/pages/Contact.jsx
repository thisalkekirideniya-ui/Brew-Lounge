import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { contact, images } from '../data/content'

const field =
  'w-full rounded-xl border border-coffee-300/40 bg-cream-50 px-5 py-3.5 text-coffee-800 outline-none transition placeholder:text-coffee-300 focus:border-gold-400 focus:ring-4 focus:ring-gold-400/20'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    e.target.reset()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const cards = [
    [MapPin, 'Visit Us', contact.address],
    [Phone, 'Call Us', contact.phone],
    [Mail, 'Email Us', contact.email],
    [Clock, 'Open Daily', '7:00 AM – 11:00 PM'],
  ]

  return (
    <>
      <PageHero title="Contact Us" eyebrow="Get in Touch" image={images.cafe2} />

      <section className="relative z-10 -mt-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-cream-50 p-6 text-center sm:p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:bg-coffee-600">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage-300/40 text-coffee-600 transition group-hover:bg-gold-400 group-hover:text-coffee-900">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold transition group-hover:text-cream-50">{t}</h3>
                <p className="mt-2 text-sm text-coffee-400 transition group-hover:text-cream-200">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionTitle center={false} eyebrow="Reservations & Enquiries" title="We’d Love to Hear From You" text="Reserve a table, plan an event, or simply say hello. Our team will respond within a few hours." />
            <Reveal>
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <input required className={field} placeholder="Full name" />
                <input required type="email" className={field} placeholder="Email address" />
                <input className={field} placeholder="Phone number" />
                <select className={field} defaultValue="">
                  <option value="" disabled>Reason for contact</option>
                  <option>Table reservation</option>
                  <option>Private event</option>
                  <option>Catering</option>
                  <option>General enquiry</option>
                </select>
                <input type="date" className={field} />
                <select className={field} defaultValue="">
                  <option value="" disabled>Number of guests</option>
                  {['1–2', '3–4', '5–8', '9+'].map((g) => <option key={g}>{g}</option>)}
                </select>
                <textarea required rows={5} className={`${field} sm:col-span-2`} placeholder="Your message" />
                <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
                  <button className="btn-primary">Send Message <Send size={16} /></button>
                  <AnimatePresence>
                    {sent && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-sm font-medium text-sage-600"
                      >
                        <CheckCircle2 size={18} /> Thank you! We’ll be in touch shortly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Reveal>
          </div>

          <Reveal dir="left" className="lg:col-span-2">
            <div className="grain relative h-full overflow-hidden rounded-[2rem] bg-coffee-900 p-6 sm:p-10 text-cream-200">
              <img src={images.interior3} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="relative">
                <p className="font-script text-3xl text-sage-300">Opening Hours</p>
                <h3 className="mt-2 font-serif text-3xl text-cream-50">Come Say Hello</h3>
                <ul className="mt-8 space-y-5">
                  {contact.hours.map(([d, h]) => (
                    <li key={d} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-cream-50/10 pb-4 text-sm sm:text-base">
                      <span>{d}</span>
                      <span className="font-serif text-gold-400">{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-cream-300/80">
                  Walk-ins are always welcome. For groups of 6 or more, and for weekend brunch, we recommend reserving in advance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="container-x pb-20 md:pb-28">
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <iframe
            title="Brew Lounge location"
            src="https://www.google.com/maps?q=Flower+Road+Colombo+07&output=embed"
            className="h-[320px] w-full grayscale sm:h-[450px]-[40%] sepia-[20%]"
            loading="lazy"
          />
        </div>
      </Reveal>
    </>
  )
}

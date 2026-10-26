import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Minus, Plus } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { faqs, images } from '../data/content'

const times = ['8:00 AM', '9:30 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM', '8:00 PM']
const seating = [
  ['Main Lounge', 'Soft sofas, warm lighting', images.interior],
  ['Window Side', 'Natural light & city views', images.interior3],
  ['Coffee Bar', 'Watch our baristas at work', images.cafe],
  ['Private Lounge', 'Quiet & exclusive (6+ guests)', images.interior4],
]
const steps = ['Date & Time', 'Seating', 'Your Details', 'Confirmed']
const field =
  'w-full rounded-xl border border-coffee-300/40 bg-cream-50 px-5 py-3.5 outline-none transition placeholder:text-coffee-300 focus:border-gold-400 focus:ring-4 focus:ring-gold-400/20'

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map(([q, a], i) => (
        <Reveal key={q} delay={i * 0.05}>
          <div className={`overflow-hidden rounded-2xl transition ${open === i ? 'bg-coffee-600 text-cream-50 shadow-xl' : 'bg-cream-50 shadow-sm'}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6">
              <span className="font-serif text-base font-semibold sm:text-lg">{q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${open === i ? 'bg-gold-400 text-coffee-900' : 'bg-cream-100'}`}>
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <span className="block px-5 pb-5 text-sm text-cream-200 sm:px-6 sm:pb-6 sm:text-base">{a}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Reservation() {
  const today = new Date().toISOString().split('T')[0]
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [form, setForm] = useState({ date: '', time: '', guests: 2, seat: '', name: '', phone: '', email: '', note: '' })
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const canNext = [form.date && form.time, form.seat, form.name && form.phone && form.email][step]
  const go = (d) => { setDir(d); setStep((s) => s + d) }
  const reset = () => { setForm({ date: '', time: '', guests: 2, seat: '', name: '', phone: '', email: '', note: '' }); setDir(-1); setStep(0) }

  return (
    <>
      <PageHero title="Reservation" eyebrow="Book Your Table" image={images.interior3} />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Reserve Online" title="Your Table Awaits" text="Book in under a minute. We’ll confirm your reservation by phone or email." />

          <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-3xl sm:rounded-[2rem] bg-cream-50 shadow-2xl shadow-coffee-900/10">
            {/* progress */}
            <div className="grain relative bg-coffee-900 px-6 py-8 sm:px-10">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-5 right-5 top-5 h-0.5 bg-cream-50/15" />
                <motion.div className="absolute left-5 top-5 h-0.5 bg-gold-400" animate={{ width: `calc(${(step / 3) * 100}% - ${(step / 3) * 40}px)` }} />
                {steps.map((s, i) => (
                  <div key={s} className="relative flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ scale: i === step ? 1.15 : 1 }}
                      className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-colors ${
                        i < step ? 'bg-sage-500 text-cream-50' : i === step ? 'bg-gold-400 text-coffee-900' : 'bg-coffee-700 text-cream-300'
                      }`}
                    >
                      {i < step ? <Check size={18} /> : i + 1}
                    </motion.div>
                    <span className={`hidden text-xs uppercase tracking-widest sm:block ${i <= step ? 'text-cream-50' : 'text-cream-300/50'}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden p-5 sm:p-10">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 0 && (
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block font-serif text-lg font-semibold">Select a date</label>
                        <input type="date" min={today} value={form.date} onChange={(e) => set('date', e.target.value)} className={field} />
                        <label className="mb-3 mt-8 block font-serif text-lg font-semibold">Number of guests</label>
                        <div className="flex items-center gap-5">
                          <button type="button" onClick={() => set('guests', Math.max(1, form.guests - 1))} className="grid h-12 w-12 place-items-center rounded-full border border-coffee-300 transition hover:bg-coffee-600 hover:text-cream-50"><Minus size={18} /></button>
                          <motion.span key={form.guests} initial={{ scale: 1.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-12 text-center font-serif text-4xl font-bold text-coffee-600">{form.guests}</motion.span>
                          <button type="button" onClick={() => set('guests', Math.min(30, form.guests + 1))} className="grid h-12 w-12 place-items-center rounded-full border border-coffee-300 transition hover:bg-coffee-600 hover:text-cream-50"><Plus size={18} /></button>
                        </div>
                      </div>
                      <div>
                        <label className="mb-3 block font-serif text-lg font-semibold">Preferred time</label>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          {times.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => set('time', t)}
                              className={`rounded-xl py-3 text-xs font-medium transition sm:text-sm ${form.time === t ? 'bg-coffee-600 text-cream-50 shadow-lg' : 'bg-cream-100 hover:bg-cream-200'}`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <p className="mb-5 font-serif text-lg font-semibold">Choose your seating preference</p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        {seating.map(([n, d, img]) => (
                          <button
                            type="button"
                            key={n}
                            onClick={() => set('seat', n)}
                            className={`group relative h-40 overflow-hidden rounded-2xl text-left ring-4 transition ${form.seat === n ? 'ring-gold-400' : 'ring-transparent'}`}
                          >
                            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 to-coffee-900/10" />
                            <div className="absolute bottom-0 p-5">
                              <p className="font-serif text-xl text-cream-50">{n}</p>
                              <p className="text-xs text-cream-200">{d}</p>
                            </div>
                            {form.seat === n && (
                              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-gold-400 text-coffee-900">
                                <Check size={16} />
                              </motion.span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <input className={field} placeholder="Full name *" value={form.name} onChange={(e) => set('name', e.target.value)} />
                      <input className={field} placeholder="Phone number *" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                      <input type="email" className={`${field} sm:col-span-2`} placeholder="Email address *" value={form.email} onChange={(e) => set('email', e.target.value)} />
                      <textarea rows={4} className={`${field} sm:col-span-2`} placeholder="Special requests (birthday, allergies, high chair...)" value={form.note} onChange={(e) => set('note', e.target.value)} />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="py-6 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                        className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-sage-500 text-cream-50 shadow-xl"
                      >
                        <CalendarCheck size={44} />
                      </motion.div>
                      <h3 className="mt-6 font-serif text-2xl font-semibold sm:text-3xl">Thank you, {form.name.split(' ')[0]}!</h3>
                      <p className="mt-2 text-coffee-400">Your reservation request has been received. We’ll confirm shortly.</p>
                      <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-4 text-left sm:grid-cols-4">
                        {[['Date', form.date], ['Time', form.time], ['Guests', form.guests], ['Seating', form.seat]].map(([k, v]) => (
                          <div key={k} className="rounded-xl bg-cream-100 p-4">
                            <p className="text-[10px] uppercase tracking-widest text-coffee-400">{k}</p>
                            <p className="mt-1 break-words font-serif text-sm font-semibold sm:text-base">{v}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button onClick={reset} className="btn-primary">New Booking</button>
                        <Link to="/products" className="btn-outline text-coffee-700">Browse Menu</Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {step < 3 && (
              <div className="flex items-center justify-between gap-4 border-t border-coffee-300/20 px-5 py-5 sm:px-10 sm:py-6">
                <button
                  onClick={() => go(-1)}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-coffee-500 transition hover:text-coffee-800 disabled:invisible"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => go(1)} disabled={!canNext} className="btn-primary disabled:pointer-events-none disabled:opacity-40">
                  {step === 2 ? 'Confirm Booking' : 'Continue'} <ArrowRight size={16} />
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Good to Know" title="Frequently Asked Questions" />
          <Faq />
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Check, Clock, Music, PartyPopper, Presentation, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { events, images } from '../data/content'

const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const spaces = [
  {
    name: 'The Private Lounge',
    guests: 'Up to 30 guests',
    desc: 'An intimate room with its own coffee bar, perfect for birthdays, bridal showers and team gatherings.',
    img: u('1516997121675-4c2d1684aa3e'),
  },
  {
    name: 'Full Venue Hire',
    guests: 'Up to 80 guests',
    desc: 'Make Brew Lounge yours for product launches, cocktail-style receptions and celebrations.',
    img: u('1519671482749-fd09be7ccebf'),
  },
  {
    name: 'Business Meetings',
    guests: 'Up to 12 guests',
    desc: 'A quiet, well-equipped corner with screen, Wi-Fi and unlimited coffee for productive sessions.',
    img: u('1556761175-b413da4baf72'),
  },
]

const packages = [
  { name: 'Coffee Break', price: 'LKR 3,500', unit: 'per guest', perks: ['Unlimited coffee & tea', 'Assorted pastries', 'Up to 3 hours', 'Reserved seating'] },
  { name: 'Celebration', price: 'LKR 7,500', unit: 'per guest', perks: ['Signature drinks menu', 'Canapés & dessert table', 'Custom décor', 'Dedicated host', 'Up to 4 hours'], featured: true },
  { name: 'Exclusive', price: 'Custom', unit: 'tailored quote', perks: ['Full venue buyout', 'Bespoke menu by our chef', 'Live music on request', 'Branding & photography'] },
]

export default function Events() {
  return (
    <>
      <PageHero title="Events" eyebrow="Gather & Celebrate" image={u('1514525253161-7a46d19cd819', 2000)} />

      {/* Upcoming */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="What’s On" title="Upcoming at the Lounge" text="Music, masterclasses and tastings. There’s always something brewing at Brew Lounge." />
          <div className="space-y-16">
            {events.map((e, i) => (
              <div key={e.title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <Reveal dir={i % 2 ? 'left' : 'right'} className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <img src={e.img} alt={e.title} className="h-[260px] w-full object-cover transition duration-1000 sm:h-[380px] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-coffee-900">{e.tag}</span>
                </Reveal>
                <Reveal dir={i % 2 ? 'right' : 'left'} delay={0.15}>
                  <p className="font-script text-2xl text-sage-500">Event 0{i + 1}</p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{e.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-5 text-sm text-coffee-500">
                    <span className="flex items-center gap-2"><CalendarDays size={18} className="text-gold-500" />{e.date}</span>
                    <span className="flex items-center gap-2"><Clock size={18} className="text-gold-500" />{e.time}</span>
                  </div>
                  <p className="mt-5 max-w-lg leading-relaxed text-coffee-400">{e.desc}</p>
                  <Link to="/reservation" className="btn-primary mt-8">Reserve a Spot <ArrowRight size={16} /></Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions strip */}
      <section className="bg-sage-500 py-14">
        <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[[PartyPopper, 'Birthdays'], [Presentation, 'Corporate'], [Music, 'Live Sessions'], [Users, 'Private Dining']].map(([Icon, t], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Icon size={36} className="mx-auto text-cream-50" />
              <p className="mt-3 font-serif text-xl text-cream-50">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Spaces */}
      <section className="grain relative overflow-hidden bg-coffee-900 py-20 md:py-28">
        <div className="container-x relative">
          <SectionTitle light eyebrow="Private Hire" title="Spaces for Every Occasion" text="Let our events team create a memorable experience, from intimate gatherings to grand celebrations." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.15}>
                <motion.div whileHover={{ y: -10 }} className="group relative h-[380px] overflow-hidden rounded-3xl sm:h-[460px]">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-coffee-900/40 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400"><Users size={14} />{s.guests}</p>
                    <h3 className="mt-2 font-serif text-2xl text-cream-50">{s.name}</h3>
                    <p className="mt-3 overflow-hidden text-sm text-cream-200 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100">{s.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Event Packages" title="Curated for You" />
          <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-8">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.15}>
                <div className={`relative rounded-3xl p-7 transition duration-500 sm:p-10 hover:-translate-y-2 ${p.featured ? 'bg-coffee-600 py-14 text-cream-50 shadow-2xl' : 'bg-cream-100 shadow-md hover:shadow-xl'}`}>
                  {p.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-coffee-900">Most Popular</span>
                  )}
                  <h3 className="font-serif text-2xl">{p.name}</h3>
                  <p className={`mt-4 font-serif text-4xl font-bold ${p.featured ? 'text-gold-400' : 'text-coffee-600'}`}>{p.price}</p>
                  <p className={`text-sm ${p.featured ? 'text-cream-200' : 'text-coffee-400'}`}>{p.unit}</p>
                  <ul className="mt-8 space-y-3">
                    {p.perks.map((k) => (
                      <li key={k} className="flex items-center gap-3 text-sm">
                        <span className={`grid h-6 w-6 place-items-center rounded-full ${p.featured ? 'bg-gold-400 text-coffee-900' : 'bg-sage-500 text-cream-50'}`}><Check size={14} /></span>
                        {k}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-10 w-full justify-center ${p.featured ? 'btn-primary !bg-gold-500 !text-coffee-900 hover:!bg-gold-400' : 'btn-primary'}`}>
                    Enquire Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <Reveal className="container-x">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem]">
            <img src={images.interior2} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-coffee-900/75" />
            <div className="relative px-6 py-16 text-center sm:px-8 sm:py-20">
              <p className="font-script text-3xl text-sage-300">Planning Something Special?</p>
              <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold text-cream-50 sm:text-4xl md:text-5xl">Let’s Create an Unforgettable Event Together</h2>
              <Link to="/contact" className="btn-primary mt-10 !bg-gold-500 !text-coffee-900 hover:!bg-gold-400">Talk to Our Events Team <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, animate, motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, Award, Bean, ChevronLeft, ChevronRight, Coffee, CupSoda, Flame, Heart,
  Leaf, Quote, Sparkles, Star, Wifi, Croissant, Instagram,
} from 'lucide-react'
import Reveal, { SectionTitle } from '../components/Reveal'
import { images, signatures, menu, testimonials, gallery } from '../data/content'

const lkr = (n) => `LKR ${n.toLocaleString()}`

/* ---------------- Hero ---------------- */
const heroSlides = [
  { eyebrow: 'Welcome to Brew Lounge', title: ['Where Every Cup', 'Tells a Story'] },
  { eyebrow: 'Crafted with Passion', title: ['Ceylon Heritage,', 'Modern Craft'] },
  { eyebrow: 'Colombo’s Finest', title: ['Slow Mornings,', 'Perfect Pours'] },
]

function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6500)
    return () => clearInterval(t)
  }, [])
  const slide = heroSlides[i]

  return (
    <section className="relative flex h-[100svh] min-h-[600px] items-center overflow-hidden bg-coffee-900">
      <AnimatePresence>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        >
          <img src={images.hero[i]} alt="" className="h-full w-full animate-kenburns object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 via-coffee-900/60 to-coffee-900/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-coffee-900/70 to-transparent" />

      <div className="container-x relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="max-w-3xl" exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <motion.p
              className="font-script text-2xl text-sage-300 sm:text-3xl md:text-4xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {slide.eyebrow}
            </motion.p>
            <h1 className="mt-4 font-serif text-[2.6rem] font-semibold leading-[1.08] text-cream-50 sm:text-6xl md:text-8xl">
              {slide.title.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    className={`block ${li === 1 ? 'italic text-gold-400' : ''}`}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + li * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-cream-200 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specialty coffee, artisan pastries and an elegant space to unwind, in the heart of Colombo.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/products" className="btn-primary !bg-gold-500 !text-coffee-900 hover:!bg-gold-400">
                Explore Menu <ArrowRight size={16} />
              </Link>
              <Link to="/reservation" className="btn-outline text-cream-50">Book a Table</Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-5 z-10 flex gap-3 sm:bottom-10 sm:left-auto sm:right-8">
        {heroSlides.map((_, d) => (
          <button
            key={d}
            onClick={() => setI(d)}
            aria-label={`Slide ${d + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${d === i ? 'w-12 bg-gold-400' : 'w-6 bg-cream-50/40'}`}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-200 md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  )
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const words = ['Specialty Coffee', 'Ceylon Tea', 'Artisan Pastries', 'Cold Brew', 'Single Origin', 'Fresh Roasted']
  return (
    <div className="overflow-hidden bg-coffee-600 py-5">
      <div className="flex w-max animate-marquee">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-serif text-xl italic sm:gap-8 sm:px-8 sm:text-2xl text-cream-50">
            {w} <Sparkles size={18} className="text-gold-400" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------- Welcome ---------------- */
function Welcome() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 hidden select-none md:block font-script text-[14rem] leading-none text-cream-200/60">
        Brew
      </div>
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal dir="right" className="relative h-[400px] sm:h-[520px]">
          <div className="absolute left-0 top-0 h-[320px] w-[75%] sm:h-[420px] sm:w-[72%] overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={images.interior} alt="Brew Lounge interior" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
          </div>
          <div className="absolute bottom-0 right-0 h-[220px] w-[58%] overflow-hidden rounded-[2rem] border-4 sm:h-[300px] sm:w-[55%] sm:border-8 border-cream-50 shadow-2xl">
            <img src={images.latteArt} alt="Latte art" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
          </div>
          <div className="absolute bottom-10 left-3 grid h-24 w-24 animate-float sm:bottom-16 sm:left-6 sm:h-32 sm:w-32 place-items-center rounded-full bg-coffee-600 text-center text-cream-50 shadow-xl">
            <div>
              <p className="font-serif text-3xl font-bold text-gold-400 sm:text-4xl">15+</p>
              <p className="text-[10px] uppercase tracking-widest">Origins</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal><p className="eyebrow">Our Story</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading mt-2">A Sanctuary for <span className="italic text-coffee-400">Coffee Lovers</span> in Colombo</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-coffee-500">
              Brew Lounge by Zoe was born from a simple belief: great coffee deserves a beautiful home. We source
              the finest beans from Sri Lanka’s misty highlands and celebrated estates around the world, roast them
              in small batches, and serve every cup with intention.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                [Bean, 'Ethically Sourced', 'Direct trade with growers'],
                [Flame, 'Small-Batch Roasted', 'Fresh every single week'],
                [Croissant, 'Baked In-House', 'Pastries made each morning'],
                [Heart, 'Made With Love', 'Hospitality from the heart'],
              ].map(([Icon, t, d]) => (
                <div key={t} className="group flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sage-300/40 text-sage-600 transition group-hover:bg-coffee-600 group-hover:text-cream-50">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold">{t}</p>
                    <p className="text-sm text-coffee-400">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/about" className="btn-primary mt-10">Discover More <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Signature drinks ---------------- */
function Signatures() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="container-x">
        <SectionTitle
          eyebrow="Signature Collection"
          title="Crafted to Perfection"
          text="Our baristas’ most-loved creations, each one a balance of origin, technique and a little Colombo magic."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signatures.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full overflow-hidden rounded-3xl bg-cream-50 shadow-lg shadow-coffee-900/5 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coffee-600 backdrop-blur">
                    {s.tag}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-coffee-400">{s.desc}</p>
                  <p className="mt-4 font-serif text-lg font-semibold text-sage-600">{lkr(s.price)}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Why us ---------------- */
function WhyUs() {
  const items = [
    [Award, 'Award-Winning Baristas', 'Trained by SCA-certified coffee professionals.'],
    [Leaf, 'Sustainable Practice', 'Compostable packaging and zero-waste goals.'],
    [Wifi, 'Work-Friendly Lounge', 'Fast Wi-Fi, quiet corners and power at every seat.'],
    [CupSoda, 'Seasonal Specials', 'New creations inspired by Sri Lankan flavours.'],
  ]
  return (
    <section className="grain relative overflow-hidden bg-coffee-900 py-20 md:py-28">
      <img src={images.beans} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            light
            eyebrow="Why Brew Lounge"
            title="More Than Coffee, It’s an Experience"
            text="From the first aroma to the last sip, every detail at Brew Lounge is designed to make you feel at home in luxury."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map(([Icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="group rounded-2xl border border-cream-50/10 bg-cream-50/5 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-gold-400/50 hover:bg-cream-50/10">
                  <Icon className="text-gold-400 transition duration-500 group-hover:rotate-12 group-hover:scale-110" size={32} />
                  <h3 className="mt-4 font-serif text-lg text-cream-50">{t}</h3>
                  <p className="mt-2 text-sm text-cream-300/80">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal dir="left" className="relative mx-auto">
          <div className="absolute -inset-3 rounded-full border border-dashed sm:-inset-6 border-gold-400/40 animate-spin-slow" />
          <div className="h-[270px] w-[270px] overflow-hidden rounded-full shadow-2xl sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
            <img src={images.barista} alt="Barista at work" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-0 rounded-2xl bg-cream-50 px-6 py-4 shadow-xl">
            <p className="font-serif text-3xl font-bold text-coffee-600">4.9 ★</p>
            <p className="text-xs uppercase tracking-widest text-coffee-400">Guest Rating</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Stats ---------------- */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2.2, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

function Stats() {
  const stats = [
    [50000, '+', 'Cups Served'],
    [15, '+', 'Coffee Origins'],
    [12, '', 'Expert Baristas'],
    [4.9, '', 'Average Rating'],
  ]
  return (
    <section className="relative -mt-px bg-sage-500 py-16">
      <div className="container-x grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
        {stats.map(([n, s, l], i) => (
          <Reveal key={l} delay={i * 0.1}>
            <p className="font-serif text-4xl font-bold text-cream-50 sm:text-5xl">
              {Number.isInteger(n) ? <Counter to={n} suffix={s} /> : n}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-coffee-900/80 sm:text-xs sm:tracking-[0.3em]">{l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Menu preview ---------------- */
function MenuPreview() {
  const tabs = Object.keys(menu)
  const [tab, setTab] = useState(tabs[0])
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Our Menu" title="Taste the Difference" text="A glimpse of what awaits. Explore the full menu for our complete selection." />
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider sm:px-6 sm:py-2.5 sm:text-sm transition ${
                tab === t ? 'text-cream-50' : 'text-coffee-600 hover:text-coffee-400'
              }`}
            >
              {tab === t && (
                <motion.span layoutId="menuTab" className="absolute inset-0 rounded-full bg-coffee-600" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid gap-x-16 gap-y-8 md:grid-cols-2"
          >
            {menu[tab].slice(0, 6).map((m) => (
              <div key={m.name} className="group flex items-center gap-4 sm:gap-5">
                <img src={m.img} alt={m.name} className="h-16 w-16 shrink-0 rounded-full object-cover shadow-md ring-4 sm:h-20 sm:w-20 ring-cream-100 transition duration-500 group-hover:rotate-6 group-hover:scale-110" />
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <h3 className="font-serif text-base font-semibold sm:text-lg">{m.name}</h3>
                    <span className="flex-1 border-b border-dashed border-coffee-300/60" />
                    <span className="whitespace-nowrap font-serif text-sm font-semibold text-sage-600 sm:text-base">{lkr(m.price)}</span>
                  </div>
                  <p className="mt-1 text-sm text-coffee-400">{m.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-14 text-center">
          <Link to="/products" className="btn-primary">View Full Menu <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Parallax banner ---------------- */
function Parallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  return (
    <section ref={ref} className="relative flex h-[75vh] min-h-[480px] items-center justify-center overflow-hidden">
      <motion.img style={{ y }} src={images.pour} alt="" className="absolute inset-0 h-[140%] w-full object-cover" />
      <div className="absolute inset-0 bg-coffee-900/70" />
      <Reveal className="container-x relative text-center">
        <Quote size={48} className="mx-auto text-gold-400" />
        <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-cream-50 sm:text-3xl md:text-5xl">
          “Coffee is a language in itself, and at Brew Lounge, we speak it fluently.”
        </p>
        <p className="mt-6 font-script text-3xl text-sage-300">Zoe, Founder</p>
      </Reveal>
    </section>
  )
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    [Leaf, 'Harvest', 'Hand-picked cherries from high-altitude estates.', images.beans],
    [Flame, 'Roast', 'Small-batch roasted to unlock every note.', images.roasting],
    [Coffee, 'Brew', 'Precisely extracted by our master baristas.', images.barista2],
    [Heart, 'Serve', 'Presented with warmth, enjoyed with joy.', images.latteArt],
  ]
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Bean to Cup" title="Our Craft Process" />
        <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent lg:block" />
          {steps.map(([Icon, t, d, img], i) => (
            <Reveal key={t} delay={i * 0.15} className="group relative text-center">
              <div className="relative mx-auto h-32 w-32 sm:h-44 sm:w-44">
                <img src={img} alt={t} className="h-full w-full rounded-full object-cover shadow-xl transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-full bg-coffee-900/40 transition group-hover:bg-coffee-900/10" />
                <div className="absolute -right-1 top-0 grid h-10 w-10 place-items-center rounded-full bg-gold-400 sm:top-2 sm:h-12 sm:w-12 text-coffee-900 shadow-lg">
                  <Icon size={20} />
                </div>
              </div>
              <p className="mt-6 font-script text-xl text-sage-500">Step 0{i + 1}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">{t}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-xs text-coffee-400 sm:text-sm">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const spans = ['md:row-span-2', '', '', 'md:col-span-2', '', 'md:row-span-2', '', '']
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Inside the Lounge" title="Moments at Brew Lounge" />
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className={`group relative overflow-hidden rounded-2xl ${spans[i]}`}>
              <img src={g} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-coffee-900/0 transition duration-500 group-hover:bg-coffee-900/50">
                <Instagram className="scale-0 text-cream-50 transition duration-500 group-hover:scale-100" size={32} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link to="/gallery" className="btn-primary">View Full Gallery <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000)
    return () => clearInterval(t)
  }, [n])
  const t = testimonials[i]
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Kind Words" title="What Our Guests Say" />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center text-gold-400">
                {[...Array(5)].map((_, k) => <Star key={k} size={20} fill="currentColor" />)}
              </div>
              <p className="mt-8 font-serif text-xl italic leading-relaxed text-coffee-700 sm:text-2xl md:text-3xl">“{t.text}”</p>
              <div className="mx-auto mt-8 grid h-16 w-16 place-items-center rounded-full bg-coffee-600 font-serif text-2xl text-cream-50">
                {t.name[0]}
              </div>
              <p className="mt-4 font-serif text-xl font-semibold">{t.name}</p>
              <p className="text-sm text-sage-600">{t.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
            <button onClick={() => setI((i - 1 + n) % n)} className="grid h-12 w-12 place-items-center rounded-full border border-coffee-300 transition hover:bg-coffee-600 hover:text-cream-50" aria-label="Previous">
              <ChevronLeft />
            </button>
            {testimonials.map((_, d) => (
              <span key={d} className={`h-2 rounded-full transition-all ${d === i ? 'w-8 bg-coffee-600' : 'w-2 bg-coffee-300'}`} />
            ))}
            <button onClick={() => setI((i + 1) % n)} className="grid h-12 w-12 place-items-center rounded-full border border-coffee-300 transition hover:bg-coffee-600 hover:text-cream-50" aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- CTA ---------------- */
function Cta() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-coffee-700 sm:rounded-[2.5rem]">
          <img src={images.interior3} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900 via-coffee-900/80 to-transparent" />
          <div className="relative grid gap-10 p-6 sm:p-10 md:p-16 lg:grid-cols-2">
            <div>
              <p className="font-script text-3xl text-sage-300">Reserve Your Spot</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl md:text-5xl">Your Table Awaits</h2>
              <p className="mt-5 max-w-md text-cream-200">
                Meetings, celebrations or a quiet afternoon. Book ahead and let us prepare the perfect setting for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/reservation" className="btn-primary !bg-gold-500 !text-coffee-900 hover:!bg-gold-400">Book a Table <ArrowRight size={16} /></Link>
                <Link to="/products" className="btn-outline text-cream-50">See Menu</Link>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert('Thank you for subscribing!') }} className="self-end rounded-3xl bg-cream-50/10 p-6 backdrop-blur-md sm:p-8">
              <p className="font-serif text-2xl text-cream-50">Join the Lounge Club</p>
              <p className="mt-2 text-sm text-cream-200">Get exclusive offers, new menu launches and event invites.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input required type="email" placeholder="Your email address" className="flex-1 rounded-full bg-cream-50 px-6 py-3.5 text-coffee-800 outline-none ring-gold-400 focus:ring-2" />
                <button className="rounded-full bg-sage-500 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-cream-50 transition hover:bg-sage-600">Subscribe</button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Welcome />
      <Signatures />
      <WhyUs />
      <Stats />
      <MenuPreview />
      <Parallax />
      <Process />
      <Gallery />
      <Testimonials />
      <Cta />
    </>
  )
}

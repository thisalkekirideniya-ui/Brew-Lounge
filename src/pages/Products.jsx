import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Coffee, CupSoda, Leaf, Croissant, LayoutGrid, ShoppingBag } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { images, menu, signatures } from '../data/content'

const lkr = (n) => `LKR ${n.toLocaleString()}`
const icons = { All: LayoutGrid, Coffee, 'Cold Drinks': CupSoda, Tea: Leaf, 'Bakery & Desserts': Croissant }
const all = Object.entries(menu).flatMap(([cat, items]) => items.map((i) => ({ ...i, cat })))

const beans = [
  ['Lounge House Blend', 'Chocolate · Caramel · Hazelnut', 4500, images.beans],
  ['Ceylon Highlands', 'Jaggery · Citrus · Cocoa', 5200, images.roasting],
  ['Ethiopia Yirgacheffe', 'Jasmine · Bergamot · Peach', 5800, images.cupDark],
]

export default function Products() {
  const [cat, setCat] = useState('All')
  const items = cat === 'All' ? all : all.filter((i) => i.cat === cat)

  return (
    <>
      <PageHero title="Our Products" eyebrow="Taste the Craft" image={images.cupDark} />

      {/* Featured */}
      <section className="py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal dir="right" className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] border-2 border-gold-400" />
            <img src={signatures[0].img} alt={signatures[0].name} className="relative h-[480px] w-full rounded-[2rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-4 animate-float rounded-2xl bg-coffee-600 px-6 py-4 text-cream-50 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-gold-400">Signature</p>
              <p className="font-serif text-2xl">{lkr(signatures[0].price)}</p>
            </div>
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">Featured Today</p></Reveal>
            <Reveal delay={0.1}><h2 className="heading mt-2">{signatures[0].name}</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-coffee-500">{signatures[0].desc}</p>
              <p className="mt-4 leading-relaxed text-coffee-400">
                Our founder’s favourite and our most-ordered drink. A gentle, aromatic latte that captures the warmth of
                a Sri Lankan kitchen in a single cup.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[['Origin', 'Ceylon'], ['Roast', 'Medium'], ['Milk', 'Oat']].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-[10px] uppercase tracking-widest text-coffee-400">{k}</p>
                  <p className="mt-1 font-serif text-lg font-semibold">{v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full menu */}
      <section className="bg-cream-100 py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Full Menu" title="Explore Our Offerings" text="Freshly prepared every day with the finest ingredients. Prices include service charge." />

          <Reveal className="mb-14 flex flex-wrap justify-center gap-3">
            {['All', ...Object.keys(menu)].map((c) => {
              const Icon = icons[c]
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                    cat === c ? 'text-cream-50' : 'bg-cream-50 text-coffee-600 shadow-sm hover:shadow-md'
                  }`}
                >
                  {cat === c && <motion.span layoutId="prodTab" className="absolute inset-0 rounded-full bg-coffee-600 shadow-lg" />}
                  <Icon size={16} className="relative" />
                  <span className="relative">{c}</span>
                </button>
              )
            })}
          </Reveal>

          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {items.map((m) => (
                <motion.div
                  layout
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  className="group overflow-hidden rounded-3xl bg-cream-50 shadow-md transition-shadow hover:shadow-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute right-4 top-4 rounded-full bg-coffee-900/70 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur">
                      {lkr(m.price)}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-sage-600">{m.cat}</p>
                    <h3 className="mt-1 font-serif text-xl font-semibold">{m.name}</h3>
                    <p className="mt-2 text-sm text-coffee-400">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Retail beans */}
      <section className="grain relative overflow-hidden bg-coffee-900 py-28">
        <div className="container-x relative">
          <SectionTitle light eyebrow="Take Home" title="Freshly Roasted Beans" text="Enjoy the Brew Lounge experience at home. 250g bags, roasted weekly, whole bean or ground to order." />
          <div className="grid gap-8 md:grid-cols-3">
            {beans.map(([n, notes, p, img], i) => (
              <Reveal key={n} delay={i * 0.15}>
                <motion.div whileHover={{ y: -10 }} className="group overflow-hidden rounded-3xl border border-cream-50/10 bg-cream-50/5 backdrop-blur">
                  <div className="h-60 overflow-hidden">
                    <img src={img} alt={n} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-cream-50">{n}</h3>
                    <p className="mt-2 text-sm italic text-sage-300">{notes}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="font-serif text-xl text-gold-400">{lkr(p)}</p>
                      <Link to="/contact" className="grid h-11 w-11 place-items-center rounded-full bg-gold-400 text-coffee-900 transition group-hover:rotate-12">
                        <ShoppingBag size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-24">
        <Reveal className="container-x flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-sage-500 p-10 text-center md:flex-row md:p-14 md:text-left">
          <div>
            <p className="font-script text-3xl text-coffee-800">Events & Catering</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 md:text-4xl">Bring Brew Lounge to Your Occasion</h2>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">Enquire Now <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Gem, Handshake, HeartHandshake, Leaf, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { images } from '../data/content'

const timeline = [
  ['2019', 'The Dream', 'Zoe begins a journey through Sri Lanka’s tea and coffee estates, learning from growers.'],
  ['2021', 'The Craft', 'Training with master roasters and baristas, perfecting our signature house blend.'],
  ['2024', 'The Lounge', 'Brew Lounge opens its doors in Colombo 07, a new home for coffee lovers.'],
  ['Today', 'The Community', 'Thousands of guests, countless stories, and the same passion in every cup.'],
]

const team = [
  ['Zoe', 'Founder & Head of Coffee', images.barista2],
  ['Kasun', 'Head Barista', images.barista],
  ['Amaya', 'Pastry Chef', images.pastries],
]

export default function About() {
  return (
    <>
      <PageHero title="About Us" eyebrow="Our Journey" image={images.interior2} />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal><p className="eyebrow">Who We Are</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading mt-2">Brewed From Passion, <span className="italic text-coffee-400">Served With Soul</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-coffee-500">
                Brew Lounge by Zoe is a premium coffee lounge in the heart of Colombo, a place where Sri Lanka’s rich
                heritage of tea and spice meets the precision of modern specialty coffee.
              </p>
              <p className="mt-4 leading-relaxed text-coffee-500">
                Every detail, from our hand-selected beans to our warm wooden interiors and soft lighting, is designed
                to slow you down and invite you to savour the moment. Whether you join us for a business meeting, a
                catch-up with friends, or a quiet hour with a good book, you will always find a seat waiting.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-6">
              <div>
                <p className="font-script text-4xl text-coffee-600">Zoe</p>
                <p className="text-xs uppercase tracking-widest text-coffee-400">Founder, Brew Lounge</p>
              </div>
              <span className="h-12 w-px bg-coffee-300" />
              <Link to="/products" className="btn-primary">Our Menu <ArrowRight size={16} /></Link>
            </Reveal>
          </div>

          <Reveal dir="left" className="relative grid grid-cols-2 gap-4">
            <img src={images.cafe} alt="" className="h-56 w-full sm:h-80 rounded-3xl object-cover shadow-xl" />
            <img src={images.roasting} alt="" className="mt-10 h-56 w-full rounded-3xl sm:mt-16 sm:h-80 object-cover shadow-xl" />
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 sm:h-36 sm:w-36 place-items-center rounded-full border-4 border-cream-50 bg-coffee-600 text-center shadow-2xl">
              <div>
                <p className="font-serif text-3xl font-bold text-gold-400 sm:text-4xl">5+</p>
                <p className="text-[10px] uppercase tracking-widest text-cream-50">Years of Craft</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="grain relative overflow-hidden bg-coffee-900 py-20 md:py-28">
        <div className="container-x relative grid gap-8 md:grid-cols-3">
          {[
            [Target, 'Our Mission', 'To serve exceptional coffee that honours the farmers who grow it and delights every guest who tastes it.'],
            [Eye, 'Our Vision', 'To be Sri Lanka’s most loved coffee destination, a benchmark for quality, design and hospitality.'],
            [Gem, 'Our Promise', 'Freshly roasted beans, house-made pastries and service that makes you feel like family.'],
          ].map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.15}>
              <div className="group h-full rounded-3xl border border-cream-50/10 bg-cream-50/5 p-7 sm:p-10 text-center transition duration-500 hover:-translate-y-3 hover:bg-coffee-600">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-400/15 text-gold-400 transition duration-500 group-hover:rotate-[360deg] group-hover:bg-gold-400 group-hover:text-coffee-900">
                  <Icon size={34} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream-50">{t}</h3>
                <p className="mt-4 leading-relaxed text-cream-300/80">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Our Story" title="The Journey So Far" />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-gold-400 via-coffee-300 to-transparent md:left-1/2" />
            {timeline.map(([y, t, d], i) => (
              <Reveal
                key={y}
                dir={i % 2 ? 'left' : 'right'}
                className={`relative mb-12 pl-14 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-14' : 'md:pl-0 md:pr-14 md:text-right'}`}
              >
                <span className={`absolute left-[9px] top-2 h-4 w-4 rounded-full border-4 border-cream-50 bg-gold-400 shadow ${i % 2 ? 'md:-left-2' : 'md:left-auto md:-right-2'}`} />
                <p className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl">{y}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-coffee-400">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal dir="right" className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={images.interior4} alt="" className="h-[340px] w-full object-cover transition duration-1000 sm:h-[520px] hover:scale-110" />
          </Reveal>
          <div>
            <SectionTitle center={false} eyebrow="What We Value" title="The Brew Lounge Way" />
            {[
              [Leaf, 'Sustainability', 'Direct-trade sourcing, compostable cups and a commitment to reducing waste.'],
              [Handshake, 'Community', 'Supporting local farmers, artists and suppliers across Sri Lanka.'],
              [HeartHandshake, 'Hospitality', 'Genuine warmth and attention to detail in every interaction.'],
            ].map(([Icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.12} className="mb-6 flex gap-4 rounded-2xl bg-cream-50 p-5 sm:gap-5 sm:p-6 shadow-sm transition hover:shadow-xl">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sage-500 text-cream-50"><Icon size={26} /></div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-coffee-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="The People" title="Meet Our Team" text="The passionate hands and hearts behind every cup and every pastry." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(([n, r, img], i) => (
              <Reveal key={n} delay={i * 0.15}>
                <motion.div whileHover={{ y: -10 }} className="group relative overflow-hidden rounded-3xl shadow-xl">
                  <img src={img} alt={n} className="h-[380px] w-full object-cover transition duration-700 sm:h-[420px] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 via-coffee-900/10 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <p className="font-script text-4xl text-cream-50">{n}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-gold-400">{r}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

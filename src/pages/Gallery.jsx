import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, Instagram, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { SectionTitle } from '../components/Reveal'
import { galleryItems, images } from '../data/content'

const cats = ['All', 'Interior', 'Coffee', 'Food', 'Moments']
const heights = ['h-80', 'h-96', 'h-72', 'h-[26rem]']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const items = cat === 'All' ? galleryItems : galleryItems.filter((g) => g.cat === cat)

  const step = (d) => setOpen((o) => (o + d + items.length) % items.length)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  })

  return (
    <>
      <PageHero title="Gallery" eyebrow="Moments & Memories" image={images.interior4} />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Through Our Lens" title="Life at Brew Lounge" text="The spaces, the cups and the people that make Brew Lounge special." />

          <Reveal className="mb-14 flex flex-wrap justify-center gap-3">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider sm:px-6 sm:py-2.5 sm:text-sm transition ${
                  cat === c ? 'text-cream-50' : 'text-coffee-600 hover:text-coffee-400'
                }`}
              >
                {cat === c && <motion.span layoutId="galTab" className="absolute inset-0 rounded-full bg-coffee-600" />}
                <span className="relative">{c}</span>
              </button>
            ))}
          </Reveal>

          <div key={cat} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
                <motion.button
                  key={g.src + g.title}
                  onClick={() => setOpen(i)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative mb-5 block w-full overflow-hidden rounded-3xl ${heights[i % heights.length]}`}
                >
                  <img src={g.src} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-coffee-900/90 via-coffee-900/10 to-transparent p-6 text-left transition duration-500 md:opacity-0 md:group-hover:opacity-100">
                    <p className="text-[10px] md:translate-y-4 uppercase tracking-[0.3em] text-gold-400 transition duration-500 group-hover:translate-y-0">{g.cat}</p>
                    <p className="font-serif text-xl sm:text-2xl md:translate-y-4 text-cream-50 transition delay-75 duration-500 group-hover:translate-y-0">{g.title}</p>
                  </div>
                  <span className="absolute right-4 top-4 grid h-10 w-10 scale-0 place-items-center rounded-full bg-cream-50 text-coffee-700 transition duration-500 group-hover:scale-100">
                    <Expand size={16} />
                  </span>
                </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <Reveal className="container-x text-center">
          <Instagram className="mx-auto text-coffee-600" size={40} />
          <h2 className="heading mt-4">Follow @brewlounge.lk</h2>
          <p className="mx-auto mt-4 max-w-lg text-coffee-500">Tag us in your Brew Lounge moments for a chance to be featured on our page.</p>
          <a href="#" className="btn-primary mt-8">Follow on Instagram</a>
        </Reveal>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-coffee-900/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button className="absolute right-4 top-4 text-cream-50 sm:right-6 sm:top-6 transition hover:rotate-90 hover:text-gold-400" aria-label="Close">
              <X size={34} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1) }}
              className="absolute bottom-8 left-[calc(50%-4rem)] grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-gold-400 hover:text-coffee-900 md:bottom-auto md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <AnimatePresence mode="wait">
              <motion.figure
                key={open}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="max-w-5xl text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={items[open].src.replace('w=1600', 'w=2000')} alt={items[open].title} className="max-h-[62vh] rounded-2xl md:max-h-[78vh] object-contain shadow-2xl" />
                <figcaption className="mt-5 font-serif text-xl text-cream-50 sm:text-2xl">
                  {items[open].title}
                  <span className="ml-3 text-sm text-gold-400">{open + 1} / {items.length}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <button
              onClick={(e) => { e.stopPropagation(); step(1) }}
              className="absolute bottom-8 right-[calc(50%-4rem)] grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-gold-400 hover:text-coffee-900 md:bottom-auto md:right-8"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

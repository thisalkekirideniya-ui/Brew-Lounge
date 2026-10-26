import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Reservation from './pages/Reservation'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>{loading && <Splash key="splash" />}</AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  )
}

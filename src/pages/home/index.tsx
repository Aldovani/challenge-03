import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import BGhERO from '@/assets/bg-hero-home.png'
import LogoWhite from '@/assets/logo-white.svg'
import { motion } from 'framer-motion'
import { Hero } from './components/hero'
import { PreLoading } from './components/pre-loading'
import { Rooms } from './components/rooms'
import { Products } from './components/products'
import { Slide } from '@/pages/home/components/slide'
import { Gallery } from './components/gallery'

export function HomePage() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BGhERO})` }}
        className="md:bg-fixed  w-full h-screen bg-center  bg-cover relative after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/45 after:z-[0]"
      >
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden', translateY: -100 }}
          animate={{ opacity: 1, visibility: 'visible', translateY: 0 }}
          transition={{ delay: 4, ease: 'easeOut' }}
        >
          <Header logo={LogoWhite} transparent />
        </motion.div>
        <Hero />
        <PreLoading />
      </div>

      <Rooms />
      <Products />
      <section className="mt-36 custom-slide">
        <Slide />
      </section>
      <Gallery />

      <Footer />
    </>
  )
}

import { Header } from '@/components/ui/header'
import productNotFound from '@/assets/product-not-found.png'
import { Link } from '@/components/ui/Link'
import { motion } from 'framer-motion'
import { Footer } from '@/components/ui/footer'

export function ProductNotFoundPage() {
  return (
    <>
      <Header transparent className="absolute top-0 left-0" />

      <div
        style={{ backgroundImage: `url(${productNotFound})` }}
        className="flex px-8 items-center justify-center bg-fixed  lg:pt-[100px] w-full h-screen bg-center  bg-cover relative after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 after:z-[0]"
      >
        <div className="relative z-10 ">
          <motion.h1
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.3, ease: 'easeInOut', duration: 0.5 }}
            className="mt-2 leading-[110%] lg:text-8xl text-4xl text-center  font-manrope font-medium text-zinc-50"
          >
            Product Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.5 }}
            className="text-white max-w-[390px] mt-4 mx-auto text-center font-medium lg:text-lg text-xs"
          >
            We&prime;re sorry, but the product you&prime;re looking for
            isn&prime;t available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.5 }}
          >
            <Link
              to="/shop"
              className="mt-4 w-fit mx-auto"
              variants="secondary"
            >
              Go to shopping
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  )
}

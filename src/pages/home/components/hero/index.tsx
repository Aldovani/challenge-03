import { Link } from '@/components/ui/Link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 3.5, ease: 'easeInOut', duration: 0.5 }}
      className="relative   z-10 flex flex-col container mx-auto px-8 max-sm:px-8   justify-center sm:h-[calc(100%_-128px)] h-[calc(100%_-25%)]"
    >
      <span className="font-semibold text-zinc-50">New Arrival</span>

      <motion.h1
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 3.5, ease: 'easeInOut', duration: 0.5 }}
        className=" mt-1 sm:mt-2 leading-[110%] text-4xl   xl:text-8xl font-manrope font-medium text-zinc-50"
      >
        Discover Our <br />
        New Collection
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 3.6, ease: 'easeInOut', duration: 0.5 }}
        className="text-zinc-50 max-w-[400px] sm:mt-5 mt-3 sm:text-base text-sm"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, bottom: -100 }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ delay: 3.8, ease: 'easeInOut', duration: 0.5 }}
        className="mt-10 max-w-52  "
      >
        <Link to="/shop" variants="secondary">
          Buy Now
        </Link>
      </motion.div>
    </motion.main>
  )
}

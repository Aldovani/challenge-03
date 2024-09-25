import { motion } from 'framer-motion'

import { Footer } from '@components/ui/footer'
import { Header } from '@components/ui/header'
import { Link } from '@components/ui/Link'

import LogoWhite from '@/assets/logo-white.svg'
import NotFound from '@/assets/not-found.png'

export function NotFoundPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: ` url(${NotFound}) `,
        }}
        className="lg:bg-fixed  h-screen bg-repeat-x bg-cover after:block after:absolute after:inset-0 after:w-full after:h-screen after:bg-black/40 after:z-[0] max-sm:bg-center"
      >
        <Header logo={LogoWhite} transparent />
        <main className="relative z-10 container     mx-auto lg:mt-32 mt-16 px-8">
          <motion.span
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.5 }}
            className="font-semibold block text-white tracking-[3px] text-sm lg:text-base"
          >
            {' '}
            It looks like you&prime;ve sat on the wrong couch!
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.5 }}
            className="mt-2 leading-[110%] text-3.5xl sm:text-5xl lg:text-8xl font-manrope font-medium text-zinc-50"
          >
            Oops! <br />
            Page Not Found
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.6, ease: 'easeInOut', duration: 0.5 }}
            className="text-zinc-50 max-w-[400px] lg:mt-5 sm:mt-2 mt-4 sm:text-base text-sm"
          >
            The page you&prime;re looking for isn&prime;t here. But don&prime;t
            worry, we have plenty of other comfortable places for you to
            explore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.8, ease: 'easeInOut', duration: 0.5 }}
            className="mt-10 max-w-52  "
          >
            <Link to="/shop" variants="secondary" className="mt-12 py-5 w-fit">
              Go Back
            </Link>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  )
}

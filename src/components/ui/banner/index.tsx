import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
import DefaultBanner from '@/assets/banner-contact-page.png'

const banner = tv({
  base: 'relative h-[22.5rem]    flex flex-col items-center justify-center',
})

type BannerProps = {
  page: string
  bannerUrl?: string
  className?: string
} & VariantProps<typeof banner>

export function Banner({
  page,
  bannerUrl = DefaultBanner,
  className,
}: BannerProps) {
  return (
    <div className={banner({ className })}>
      <img
        src={bannerUrl}
        alt={`${page} banner`}
        className="w-full h-[22.5rem] object-cover"
      />

      <h2 className="absolute overflow-hidden flex text-6xl sm:text-8xl font-manrope   text-white">
        {page.split('').map((word, i) => (
          <motion.div
            className="relative"
            key={`${word}-${i}`}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '200%' }}
            transition={{
              delay: i * 0.05,
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
            }}
          >
            {word}
          </motion.div>
        ))}
      </h2>
    </div>
  )
}

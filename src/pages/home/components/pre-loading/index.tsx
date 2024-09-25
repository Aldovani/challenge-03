import { motion } from 'framer-motion'

export function PreLoading() {
  return (
    <div className=" inset-0 w-full absolute grid grid-cols-5 z-50 pointer-events-none">
      <motion.div
        animate={{ height: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="bg-white"
      ></motion.div>
      <motion.div
        animate={{ height: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="bg-white"
      ></motion.div>
      <motion.div
        animate={{ height: 0 }}
        transition={{ delay: 3.3, duration: 0.5 }}
        className="bg-white"
      ></motion.div>
      <motion.div
        animate={{ height: 0 }}
        transition={{ delay: 3.4, duration: 0.5 }}
        className="bg-white"
      ></motion.div>
      <motion.div
        animate={{ height: 0 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="bg-white"
      ></motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={106}
          height={65}
          fill="none"
        >
          <motion.path
            className="stroke-zinc-900"
            strokeWidth={5}
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              display: ['block', 'block', 'none'],
            }}
            transition={{
              delay: 0.2,
              duration: 2.8,
              ease: 'easeInOut',
            }}
            d="M44.586 17.705 19.632 60.806A2.392 2.392 0 0 1 17.562 62H5.182c-1.85 0-3-2.01-2.061-3.605L34.728 4.662c.946-1.607 3.285-1.563 4.169.079l5.724 10.632c.394.73.38 1.614-.035 2.332ZM51.568 33.19 40.211 52.41c-.942 1.595.207 3.61 2.06 3.61h22.713c1.853 0 3.002-2.015 2.06-3.61L55.687 33.191c-.926-1.567-3.193-1.567-4.119 0ZM68.368 5.008l-5.783 11.568a2.392 2.392 0 0 0 .083 2.293l24.95 41.961A2.392 2.392 0 0 0 89.674 62h11.273c1.834 0 2.986-1.98 2.079-3.575L72.588 4.895c-.946-1.662-3.364-1.598-4.22.113Z"
          />
        </svg>
      </div>
    </div>
  )
}

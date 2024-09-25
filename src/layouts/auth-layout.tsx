import { Outlet } from 'react-router-dom'
import AuthLayoutBG from '../assets/auth-layout.png'
import { motion } from 'framer-motion'

export function AuthLayout() {
  return (
    <>
      <div
        data-testid="auth-layout"
        className="grid lg:grid-cols-[50%_50%] overflow-y-hidden min-h-screen "
      >
        <Outlet />

        <div
          style={{ backgroundImage: `url(${AuthLayoutBG})` }}
          className="relative hidden lg:block h-full bg-[100%] bg-cover"
        >
          <div className="absolute h-full w-full grid grid-rows-5">
            <motion.div
              animate={{ width: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="bg-white w-full h-full"
            ></motion.div>
            <motion.div
              animate={{ width: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white w-full h-full"
            ></motion.div>
            <motion.div
              animate={{ width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white w-full h-full"
            ></motion.div>
            <motion.div
              animate={{ width: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white w-full h-full"
            ></motion.div>
            <motion.div
              animate={{ width: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white w-full h-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

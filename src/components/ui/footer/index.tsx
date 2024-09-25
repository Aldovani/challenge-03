import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'sonner'

export function Footer() {
  const [email, setEmail] = useState('')
  return (
    <footer className="bg-zinc-50  border-t border-zinc-300">
      <div className="container mx-auto ">
        <div className="flex max-lg:flex-wrap gap-10 px-4 py-12 justify-between">
          <div>
            <NavLink to="/" className="text-2xl font-bold">
              Funiro
            </NavLink>
            <p className="mt-3 text-zinc-400 max-w-[17.8125rem]">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>

          <div className="lg:ml-32">
            <h3 className="font-medium text-zinc-400">Links</h3>
            <nav className="mt-14">
              <ul className="flex flex-col gap-12 text-zinc-500">
                <li>
                  <NavLink
                    className="font-medium hover:text-zinc-900 transition-colors"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-zinc-900 transition-colors"
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-zinc-900 transition-colors"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-zinc-900 transition-colors"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:ml-36 ">
            <h3 className="font-medium text-zinc-400">Help</h3>
            <nav className="mt-14">
              <ul className="flex flex-col gap-12">
                <li className="font-medium hover:text-zinc-900 transition-colors text-zinc-500 cursor-pointer">
                  Payment Options
                </li>
                <li className="font-medium hover:text-zinc-900 transition-colors text-zinc-500 cursor-pointer">
                  Returns
                </li>
                <li className="font-medium hover:text-zinc-900 transition-colors text-zinc-500 cursor-pointer">
                  Privacy Policies
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:ml-20 ">
            <h3 className="font-medium text-zinc-400">Newsletter</h3>
            <form
              className="mt-14 flex gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                toast.success('Email saved')
                setEmail('')
              }}
            >
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="focus:border-zinc-900 w-[12.5rem] bg-transparent text-sm border-b outline-none pb-1 border-zinc-400 placeholder:text-zinc-400"
              />
              <button className="text-sm font-medium border-b border-zinc-400 relative hover:border-zinc-900 focus:border-zinc-900 transition-colors hover:text-zinc-900 text-zinc-400">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="border-t px-4 py-10 border-zinc-300 col-start-1 col-end-5">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  )
}

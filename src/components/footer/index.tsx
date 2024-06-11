import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="    border-t border-black/15">
      <div className="container mx-auto ">
        <div className="flex max-lg:flex-wrap gap-10 px-4 py-12 justify-between">
          <div>
            <NavLink to="/" className="text-2xl font-bold">
              Funino
            </NavLink>
            <p className="mt-14 text-gray-200 max-w-[17.8125rem]">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>

            <nav className="mt-14">
              <ul className="flex gap-4">
                <li>
                  <a
                    href=""
                    className="shadow-social-link  size-8 items-center justify-center flex rounded-full hover:bg-primary-400  transition-colors "
                  >
                    <img src="/facebook.svg" alt="" className="size-3" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="shadow-social-link size-8 items-center justify-center flex rounded-full hover:bg-primary-400  transition-colors"
                  >
                    <img src="/instagram.svg" alt="" className="size-3" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="shadow-social-link size-8 items-center justify-center flex rounded-full hover:bg-primary-400  transition-colors"
                  >
                    <img src="/twitter.svg" alt="" className="size-3" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="shadow-social-link size-8 items-center justify-center flex rounded-full hover:bg-primary-400  transition-colors"
                  >
                    <img src="/linkedin.svg" alt="" className="size-3" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:ml-32">
            <h3 className="font-medium text-gray-200">Links</h3>
            <nav className="mt-14">
              <ul className="flex flex-col gap-12">
                <li>
                  <NavLink
                    className="font-medium hover:text-primary-500 transition-colors"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-primary-500 transition-colors"
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-primary-500 transition-colors"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-medium hover:text-primary-500 transition-colors"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:ml-36 ">
            <h3 className="font-medium text-gray-200">Help</h3>
            <nav className="mt-14">
              <ul className="flex flex-col gap-12">
                <li className="font-medium hover:text-primary-500 transition-colors">
                  Payment Options
                </li>
                <li className="font-medium hover:text-primary-500 transition-colors">
                  Returns
                </li>
                <li className="font-medium hover:text-primary-500 transition-colors">
                  Privacy Policies
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:ml-20 ">
            <h3 className="font-medium text-gray-200">Newsletter</h3>
            <form className="mt-14 flex gap-3">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="focus:border-primary-500 w-[12.5rem] text-sm border-b outline-none pb-1 border-black placeholder:text-gray-200"
              />
              <button className="text-sm font-medium border-b border-black relative hover:border-primary-500 focus:border-primary-500 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:block after:pointer-events-none hover:after:h-full after:translate-y-[1px] after:z-[-1] after:h-[1px] after:bg-primary-500 after:transition-all">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="border-t px-4 py-10 border-black/15 col-start-1 col-end-5">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  )
}

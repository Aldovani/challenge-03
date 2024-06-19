import { ICONS } from '../assets/icons'
import { IMAGES } from '../assets/images'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Link } from '../components/Link'

export function NotFoundPage() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${IMAGES['not-found-page']})` }}
        className="bg-fixed  h-screen bg-repeat-x bg-cover after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/20 after:z-[0]"
      >
        <Header
          logoUrl={ICONS['logo-white']}
          className="bg-transparent  relative z-30 [&>div_nav_ul_li_a]:text-white [&>div_nav_ul_li_a:hover]:text-primary-500 [&>div_div_a_img]:invert [&>div_button_img[alt='shopping_cart_icon']]:invert"
        />

        <main className="relative z-10 container flex items-center    mx-auto mt-32">
          <div className=" max-w-[546px]">
            <span className="font-semibold text-white tracking-[3px]">
              It looks like you&prime;ve sat on the wrong couch!
            </span>
            <h1 className="text-[52px] font-bold text-white max-w-[376px] mt-1">
              Oops! Page Not Found
            </h1>
            <p className="text-white mt-4">
              The page you&prime;re looking for isn&prime;t here. But
              don&prime;t worry, we have plenty of other comfortable places for
              you to explore.
            </p>
            <Link to="/shop" className="mt-12 py-5 w-fit">
              Go Back
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

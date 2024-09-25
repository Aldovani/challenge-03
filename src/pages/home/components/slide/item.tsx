import { SplideSlide } from '@splidejs/react-splide'
import { Link } from '../../../../components/ui/Link'

type SlideItemProps = {
  imgUrl: string
  room: string
}

export function SlideItem({ imgUrl, room }: SlideItemProps) {
  return (
    <SplideSlide>
      <article className={`relative transition-all w-full h-full  `}>
        <div className="bg-black/20 absolute inset-0 w-full h-full"></div>
        <img
          src={imgUrl}
          className="object-cover w-full h-full transition-all "
          alt={`image of ${room}`}
        />
        <footer className="absolute opacity-0 invisible z-20 md:translate-y-10  md:bottom-8 bottom-24 md:left-32 px-8">
          <h4 className="lg:text-9xl text-6xl text-zinc-50 font-bold font-manrope ">
            {room}
          </h4>
          <span className="text-zinc-50 font-medium mt-2 md:text-xl text-base max-w-[470px] block">
            Here you will find furniture for the most diverse areas of your home
            such as{' '}
          </span>
          <Link to="/shop" variants="secondary" className="w-fit mt-4">
            Buy
          </Link>
        </footer>
      </article>
    </SplideSlide>
  )
}

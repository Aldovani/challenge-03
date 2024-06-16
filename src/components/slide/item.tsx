import { SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import { ICONS } from '../../assets/icons'

type SlideItemProps = {
  imgUrl: string
  name: string
  number: number
  room: string
}

export function SlideItem({ imgUrl, name, number, room }: SlideItemProps) {
  return (
    <SplideSlide>
      <article className={`relative transition-all w-full h-full `}>
        <img
          src={imgUrl}
          className="object-cover w-full h-full transition-all "
          alt={`image of ${room}`}
        />
        <footer className="absolute opacity-0 invisible flex items-end bottom-6 left-6 ">
          <div className="bg-white p-8 pl-4 opacity-70 backdrop-blur-[3]">
            <div className="flex  gap-2 items-center">
              <span className="font-medium text-gray-400">{number}</span>
              <span className="w-7 h-[1px] bg-gray-400"></span>
              <span className="font-medium text-gray-400  ">{room}</span>
            </div>
            <h4 className="text-[1.75rem] text-gray-500 font-semibold mt-2">
              {name}
            </h4>
          </div>
          <Link
            to="/shop"
            className="bg-primary-500 size-12 flex items-center justify-center hover:opacity-90"
          >
            <img src={ICONS['arrow-right']} alt="arrow right icon" />
          </Link>
        </footer>
      </article>
    </SplideSlide>
  )
}

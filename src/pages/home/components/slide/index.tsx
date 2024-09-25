import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './styles.css'
import { SlideItem } from './item'
import { ChevronRight } from 'lucide-react'
import Slide1 from '@/assets/slide-1.png'
import Slide2 from '@/assets/slide 2.png'
import Slide3 from '@/assets/slide 3.png'
import Slide4 from '@/assets/slide 4.png'

export function Slide() {
  return (
    <Splide
      hasTrack={false}
      options={{
        gap: 24,
        perMove: 1,
        perPage: 1,
        type: 'loop',
        fixedHeight: 590,
        autoplay: true,
        pagination: false,
      }}
      aria-label="teste"
    >
      <SplideTrack>
        <SlideItem imgUrl={Slide1} room="Living room" />
        <SlideItem imgUrl={Slide2} room="kitchen" />
        <SlideItem imgUrl={Slide3} room="Bed Room" />
        <SlideItem imgUrl={Slide4} room="Dining room" />
      </SplideTrack>

      <div className="splide__arrows ">
        <button className="splide__arrow group splide__arrow--prev">
          <ChevronRight className="text-zinc-900 group-hover:text-zinc-50" />
        </button>
        <button className="splide__arrow group splide__arrow--next">
          <ChevronRight className="text-zinc-900 group-hover:text-zinc-50" />
        </button>
      </div>
    </Splide>
  )
}

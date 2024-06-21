import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './styles.css'
import { SlideItem } from './item'
import { ICONS } from '../../assets/icons'
import { IMAGES } from '../../assets/images'

export function Slide() {
  return (
    <Splide
      hasTrack={false}
      options={{
        gap: 24,
        perMove: 1,
        perPage: 3,
        fixedWidth: 486,
        type: 'loop',
        focus: 0,
      }}
      aria-label="teste"
    >
      <SplideTrack>
        <SlideItem
          imgUrl={IMAGES['slide-1']}
          name="Inner Peace"
          number={1}
          room="Bed Room"
        />
        <SlideItem
          imgUrl={IMAGES['slide-2']}
          name="Inner Peace"
          number={2}
          room="Bed Room"
        />
        <SlideItem
          imgUrl={IMAGES['slide-3']}
          name="Inner Peace"
          number={3}
          room="Bed Room"
        />
        <SlideItem
          imgUrl={IMAGES['furniture-5']}
          name="Inner Peace"
          number={4}
          room="Bed Room"
        />
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <img
            src={ICONS['arrow-right-primary-color']}
            alt="arrow right icon"
          />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <img
            src={ICONS['arrow-right-primary-color']}
            alt="arrow right icon"
          />
        </button>
      </div>
    </Splide>
  )
}

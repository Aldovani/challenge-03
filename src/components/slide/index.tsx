// import { SlideItem } from './item'

// export function Slide() {
//   return (
//     <div className=" grid grid-cols-[404px_1fr] gap-6 ">
//       <SlideItem
//         imgUrl="/slide-1.png"
//         name="Inner Peace"
//         number={1}
//         room="Bed Room"
//         isActive
//         className="w-[404px] h-[582px]  "
//       />

//       <div className="flex flex-col ">
//         <ul className="flex gap-8">
//           <SlideItem
//             imgUrl="/slide-1.png"
//             name="Inner Peace"
//             number={1}
//             room="Bed Room"
//             className="w-[372px]  "
//           />
//           <SlideItem
//             imgUrl="/slide-1.png"
//             name="Inner Peace"
//             number={1}
//             room="Bed Room"
//             className="w-[372px]  "
//           />
//           <SlideItem
//             imgUrl="/slide-1.png"
//             name="Inner Peace"
//             number={1}
//             room="Bed Room"
//             className="w-[372px]  "
//           />
//         </ul>
//         <div className="flex ">
//           <div className="relative size-8 flex items-center justify-center">
//             <span className=" absolute block w-full h-full border border-primary-500  rounded-full"></span>
//             <span className=" block bg-primary-500 rounded-full size-3"></span>
//           </div>
//           <div className="relative size-8 flex items-center justify-center">
//             {/* <span className=" absolute block w-full h-full border border-primary-500  rounded-full"></span> */}
//             <span className=" block bg-[#D8D8D8] rounded-full size-3"></span>
//           </div>
//           <div className="relative size-8 flex items-center justify-center">
//             {/* <span className=" absolute block w-full h-full border border-primary-500  rounded-full"></span> */}
//             <span className=" block bg-[#D8D8D8] rounded-full size-3"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './styles.css'
import { SlideItem } from './item'

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
        drag: false,
      }}
      aria-label="teste"
    >
      <SplideTrack>
        <SlideItem
          imgUrl="/slide-1.png"
          name="Inner Peace"
          number={1}
          room="Bed Room"
        />
        <SlideItem
          imgUrl="/slide-2.png"
          name="Inner Peace"
          number={2}
          room="Bed Room"
        />
        <SlideItem
          imgUrl="/slide-3.png"
          name="Inner Peace"
          number={3}
          room="Bed Room"
        />
        <SlideItem
          imgUrl="/slide-1.png"
          name="Inner Peace"
          number={4}
          room="Bed Room"
        />
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <img src="/arrow-right-primary-color.svg" alt="" />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <img src="/arrow-right-primary-color.svg" alt="" />
        </button>
      </div>
    </Splide>
  )
}

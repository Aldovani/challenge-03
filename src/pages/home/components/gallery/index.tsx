import GalleryImg1 from '@/assets/gallery 1.png'
import GalleryImg2 from '@/assets/gallery 2.png'
import GalleryImg3 from '@/assets/gallery 3.png'
import GalleryImg4 from '@/assets/gallery 4.png'
import GalleryImg5 from '@/assets/gallery 5.png'
import GalleryImg6 from '@/assets/gallery 6.png'
import GalleryImg7 from '@/assets/gallery 7.png'
import GalleryImg8 from '@/assets/gallery 8.png'
import GalleryImg9 from '@/assets/gallery 9.png'
import GalleryImg10 from '@/assets/gallery 10.png'

export function Gallery() {
  return (
    <section className="container mx-auto my-36">
      <header className=" flex justify-between flex-col items-center ">
        <span className="text-zinc-400">Share your setup with</span>
        <h2 className="font-medium text-2xl md:text-3.5xl text-zinc-900">
          #FuniroFurniture
        </h2>
      </header>

      <div className="w-full container justify-center sm:gap-10 gap-8 mx-auto mt-10 flex flex-col sm:flex-row px-8">
        <div className="flex flex-col gap-x-4 gap-y-4">
          <img src={GalleryImg1} alt="gallery img 1" />
          <div className="flex justify-between gap-x-4">
            <div className="flex flex-col gap-y-8 gap-x-8">
              <img src={GalleryImg3} alt="gallery img 3" />
              <img src={GalleryImg7} alt="gallery img 7" />
            </div>
            <div className="flex flex-col gap-y-8 gap-x-8">
              <img src={GalleryImg4} alt="gallery img 4" />
              <img src={GalleryImg8} alt="gallery img 8" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-x-6 gap-y-4">
          <img src={GalleryImg2} alt="gallery img 2" />
          <div className="flex flex-row overflow-hidden  gap-4 justify-between">
            <img
              src={GalleryImg5}
              alt="gallery img 5"
              className="lg:h-40 w-1/2 object-fill "
            />
            <img
              src={GalleryImg6}
              alt="gallery img 6"
              className="lg:h-auto  "
            />
          </div>
          <div className="flex  gap-4   justify-between">
            <img
              src={GalleryImg9}
              alt="gallery img 9"
              className="xl:w-full w-1/2  "
            />
            <img
              src={GalleryImg10}
              alt="gallery img 10"
              className="xl:w-full w-1/3   block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

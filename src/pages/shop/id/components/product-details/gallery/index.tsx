import { useState } from 'react'
import { Thumbnail } from './thumbnail'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryProps = {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  function handleSetCurrentImage(index: number) {
    setCurrentImage(index)
  }

  function handleNextImage() {
    if (currentImage === images.length - 1) {
      setCurrentImage(0)
      return
    }

    setCurrentImage((prev) => prev + 1)
  }

  function handlePrevImage() {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1)
      return
    }

    setCurrentImage((prev) => prev - 1)
  }

  return (
    <div className="xl:w-1/2 w-full    ">
      <div className="relative flex items-center justify-center h-[300px] sm:h-[500px]      ">
        <button
          onClick={handlePrevImage}
          className="hover:bg-zinc-900 hover:text-zinc-50 transition-colors bg-zinc-50 md:p-4 p-2 text-zinc-900 absolute left-4 top-1/2 z-[60]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNextImage}
          className=" hover:bg-zinc-900 hover:text-zinc-50 transition-colors bg-zinc-50 md:p-4 p-2 absolute right-4 text-zinc-900 top-1/2 z-[60]"
        >
          <ChevronRight />
        </button>
        {images.map((e, i) => (
          <img
            src={e}
            key={i}
            alt={`image ${i}`}
            data-is-active={i === currentImage}
            className="absolute    w-full h-full top-1/2 -translate-y-1/2 left-0 opacity-0  invisible data-[is-active='true']:visible data-[is-active='true']:opacity-100 transition-all"
          />
        ))}
      </div>
      <div className="mt-4">
        <Thumbnail
          images={images}
          currentActive={currentImage}
          onSetCurrent={handleSetCurrentImage}
        />
      </div>
    </div>
  )
}

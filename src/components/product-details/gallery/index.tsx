import { useState } from 'react'
import { Thumbnail } from './thumbnail'

type GalleryProps = {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  function handleSetCurrentImage(index: number) {
    setCurrentImage(index)
  }
  return (
    <div className="grid grid-cols-1 max-sm:w-full lg:grid-col-[76px_481px] gap-8">
      <div className="lg:col-start-2  lg:col-end-3  relative flex items-center justify-center h-[300px] sm:h-[500px]    sm:w-[26.4375rem]  ">
        {images.map((e, i) => (
          <img
            src={e}
            key={i}
            alt={`image ${i}`}
            data-is-active={i === currentImage}
            className="absolute rounded-[0.625rem] object-cover  w-full h-full top-1/2 -translate-y-1/2 left-0 opacity-0  invisible data-[is-active='true']:visible data-[is-active='true']:opacity-100 transition-all"
          />
        ))}
      </div>
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1">
        <Thumbnail
          images={images}
          currentActive={currentImage}
          onSetCurrent={handleSetCurrentImage}
        />
      </div>
    </div>
  )
}

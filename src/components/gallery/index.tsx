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
    <div className="grid grid-cols-1 lg:grid-col-[76px_481px] gap-8">
      <div className="lg:col-start-2 lg:col-end-3 bg-primary-200 relative flex items-center justify-center h-[300px] sm:h-[500px]    sm:w-[26.4375rem]  rounded-[0.625rem]">
        {images.map((e, i) => (
          <img
            src={e}
            key={i}
            alt=""
            data-is-active={i === currentImage}
            className="absolute top-1/2 -translate-y-1/2 left-0 opacity-0  invisible data-[is-active='true']:visible data-[is-active='true']:opacity-100 transition-all"
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

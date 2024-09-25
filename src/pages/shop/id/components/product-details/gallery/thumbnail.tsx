type ThumbnailProps = {
  images: string[]
  onSetCurrent: (index: number) => void
  currentActive: number
}

export function Thumbnail({
  images,
  onSetCurrent,
  currentActive,
}: ThumbnailProps) {
  return (
    <ul className="flex  flex-row  gap-3  sm:gap-8 ">
      {images.map((image, index) => (
        <li
          key={index}
          onClick={() => onSetCurrent(index)}
          data-is-active={currentActive === index}
          className="data-[is-active='true']:brightness-75 brightness-100 transition-all md:size-20 size-10 cursor-pointer "
        >
          <img src={image} alt={`img thumbnail ${index}`} />
        </li>
      ))}
    </ul>
  )
}

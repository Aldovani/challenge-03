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
    <ul className="flex lg:flex-col flex-row  gap-3  sm:gap-8 ">
      {images.slice(0, 4).map((image, i) => (
        <li
          key={i}
          onClick={() => onSetCurrent(i)}
          data-is-active={currentActive === i}
          className="data-[is-active='true']:brightness-95 brightness-100 transition-all size-20 flex cursor-pointer items-center justify-center bg-primary-200 rounded-[0.625rem]"
        >
          <img src={image} alt="" />
        </li>
      ))}
    </ul>
  )
}

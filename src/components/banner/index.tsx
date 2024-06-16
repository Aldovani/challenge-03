import { Link } from 'react-router-dom'
import { ICONS } from '../../assets/icons'
import { IMAGES } from '../../assets/images'

type BannerProps = {
  page: string
}

export function Banner({ page }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${IMAGES.banner})` }}
      className=" h-[19.75rem]  flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl font-medium">{page}</h2>
      <div className="flex items-center gap-2 mt-1">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <img src={ICONS['arrow-down']} alt="arrow down" />
        <span>{page}</span>
      </div>
    </div>
  )
}

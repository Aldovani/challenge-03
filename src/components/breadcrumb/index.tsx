import { Link } from 'react-router-dom'
import { ICONS } from '../../assets/icons'

type BreadcrumbProps = {
  name: string
}

export function Breadcrumb({ name }: BreadcrumbProps) {
  return (
    <div className="bg-primary-200 py-8">
      <nav className="container mx-auto flex items-center max-sm:px-8 gap-3 sm:gap-8">
        <div className="flex gap-2 sm:gap-6">
          <Link to="/" className="text-gray-200 hover:text-primary-500">
            Home
          </Link>
          <img src={ICONS['arrow-down']} alt="arrow down icon" />
        </div>
        <div className="flex gap-2 sm:gap-6">
          <Link to="/shop" className="text-gray-200 hover:text-primary-500">
            Shop
          </Link>
          <img src={ICONS['arrow-down']} alt="arrow down icon" />
        </div>
        <div className="h-[2.3125rem] w-[1px] bg-gray-300" />

        <span>{name}</span>
      </nav>
    </div>
  )
}

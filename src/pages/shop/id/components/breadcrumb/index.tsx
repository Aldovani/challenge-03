import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type BreadcrumbProps = {
  name: string
}

export function Breadcrumb({ name }: BreadcrumbProps) {
  return (
    <div className="my-8 ">
      <nav className="container mx-auto flex items-center px-8 sm:text-base text-xs">
        <Link to="/" className="text-zinc-400 hover:text-zinc-900">
          Home
        </Link>
        <ChevronRight className="text-zinc-400" />
        <Link
          to="/shop"
          className="text-zinc-400 hover:text-zinc-900 sm:text-base text-xs"
        >
          Shop
        </Link>
        <ChevronRight className="text-zinc-400" />
        <span className="text-zinc-600 sm:text-base text-xs truncate">
          {name}
        </span>
      </nav>
    </div>
  )
}

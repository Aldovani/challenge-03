import { Facebook, Linkedin, Twitter } from 'lucide-react'

type InfosProps = {
  tags: string[]
  category: string
}

export function Infos({ tags, category }: InfosProps) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-[80px_30px_1fr] md:gap-8 gap-2 mt-3">
        <span className="text-zinc-400 ">SKU</span>
        <span className="text-zinc-400">:</span>
        <span className="text-zinc-400">SS001</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr]  md:gap-8 gap-2 mt-3">
        <span className="text-zinc-400">Category</span>
        <span className="text-zinc-400">:</span>
        <span className="text-zinc-400">{category}</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr]  md:gap-8 gap-2 mt-3">
        <span className="text-zinc-400">Tags</span>
        <span className="text-zinc-400">:</span>
        <span className="text-zinc-400 text-sm">{tags.join(', ')}</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr]  md:gap-8 gap-2 mt-3">
        <span className="text-gray-200">Share</span>
        <span className="text-gray-200">:</span>
        <span className="flex sm:gap-6 gap-4">
          <Facebook className="text-zinc-400 hover:text-zinc-900 cursor-pointer" />
          <Linkedin className="text-zinc-400 hover:text-zinc-900 cursor-pointer" />
          <Twitter className="text-zinc-400 hover:text-zinc-900  cursor-pointer" />
        </span>
      </div>
    </div>
  )
}

import { ICONS } from '../../../assets/icons'

type InfosProps = {
  tags: string[]
  category: string
}

export function Infos({ tags, category }: InfosProps) {
  return (
    <div>
      <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
        <span className="text-gray-200 ">SKU</span>
        <span className="text-gray-200">:</span>
        <span className="text-gray-200">SS001</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
        <span className="text-gray-200">Category</span>
        <span className="text-gray-200">:</span>
        <span className="text-gray-200">{category}</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
        <span className="text-gray-200">Tags</span>
        <span className="text-gray-200">:</span>
        <span className="text-gray-200">{tags.join(' , ')}</span>
      </div>
      <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
        <span className="text-gray-200">Share</span>
        <span className="text-gray-200">:</span>
        <span className="flex gap-6">
          <img src={ICONS['facebook-fill']} alt="facebook icon fill" />
          <img src={ICONS['linkedin-box-fill']} alt="linkedin icon fill" />
          <img src={ICONS['twitter-circle-filled']} alt="twitter icon fill" />
        </span>
      </div>
    </div>
  )
}

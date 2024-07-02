import { useNavigate } from 'react-router-dom'
import { ICONS } from '../../assets/icons'
import { FormateMoney } from '../../utils/formate-money'
import { toast } from 'sonner'
import { useAppDispatch } from '../../stores'
import { addProduct } from '../../stores/modules/cart'

type Product = {
  name: string
  style: string
  price: number
  id: string
  isNew: boolean
  priceDiscount: number
  images: string[]
}

type ProductItemProps = {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate()

  function handleNavigateTo() {
    navigate(`/shop/${product.id}`)
  }

  const dispatch = useAppDispatch()
  return (
    <div
      onClick={handleNavigateTo}
      className="cursor-pointer bg-gray-50 relative overflow-hidden group"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full max-h-[300px] h-full"
      />

      <main className="pl-4 pr-5 pt-4 pb-20  sm:pb-8  h-[145px]">
        <h3 className="text-2xl font-semibold text-gray-500 text-nowrap text-ellipsis max-w-full overflow-hidden">
          {product.name}
        </h3>
        <span className="mt-2 block font-medium text-gray-300">
          {product.style}
        </span>
        <div className="mt-2 flex justify-between items-center">
          {product.priceDiscount > 0 ? (
            <>
              <strong className="text-gray-500 text-xl font-semibold">
                {FormateMoney(
                  product.price - product.price * (product.priceDiscount / 100),
                )}
              </strong>
              <span className="text-gray-100 line-through">
                {FormateMoney(product.price)}
              </span>
            </>
          ) : (
            <strong className="text-gray-500 text-xl font-semibold">
              {FormateMoney(product.price)}
            </strong>
          )}
        </div>
      </main>
      {product.priceDiscount > 0 && (
        <div className="size-12 flex absolute rounded-full items-center justify-center  top-6 right-6 bg-action-error">
          <span className="font-medium text-white">
            -{product.priceDiscount}%
          </span>
        </div>
      )}

      {product.isNew && (
        <div className="size-12 flex absolute rounded-full items-center justify-center  top-6 right-6 bg-action-success">
          <span className="font-medium text-white">New</span>
        </div>
      )}

      <div className=" transition-all duration-500 translate-y-[calc(100%_+_5px)] group-hover:translate-y-0 flex items-center justify-center flex-col absolute w-full h-full bg-gray-500 inset-0 bg-opacity-[72%]">
        <button
          onClick={(e) => {
            e.stopPropagation()
            dispatch(
              addProduct({
                id: product.id,
                imgUrl: product.images[0],
                name: product.name,
                price: product.price,
              }),
            )
            toast.success('Item adicionado ao carinho')
          }}
          className="hover:bg-primary-500 hover:text-white transition-colors px-14 py-3 bg-white text-primary-500 font-semibold"
        >
          Add to cart
        </button>

        <div className="max-sm:flex-col flex items-center gap-3 sm:gap-5 mt-6">
          <div className="flex gap-1 hover:brightness-50">
            <img src={ICONS.share} alt="share icon" />
            <span className="font-semibold text-white ">Share</span>
          </div>
          <div className="flex gap-1 hover:brightness-50">
            <img src={ICONS.compare} alt="compare icon" />
            <span className="font-semibold text-white ">Compare</span>
          </div>
          <div className="flex gap-1 hover:brightness-50">
            <img src={ICONS.heart} alt="liked icon" />
            <span className="font-semibold text-white ">Like</span>
          </div>
        </div>
      </div>
    </div>
  )
}

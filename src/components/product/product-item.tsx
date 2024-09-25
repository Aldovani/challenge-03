import { useNavigate } from 'react-router-dom'
import { FormateMoney } from '../../utils/formate-money'
import { toast } from 'sonner'
import { useAppDispatch } from '../../stores'
import { addProduct } from '../../stores/modules/cart'
import { Heart, ShoppingCartIcon } from 'lucide-react'

type Product = {
  name: string
  style: string
  price: number
  id: string
  isNew: boolean
  priceDiscount: number
  images: string[]
  colors: { name: string; hex: string }[]
  sizes?: { name: string; acronym: string }[]
}

type ProductItemProps = {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate()

  function handleNavigateTo() {
    navigate(`/shop/${product.id}`)
  }

  function handleAddItemToCart(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.stopPropagation()
    dispatch(
      addProduct({
        id: product.id,
        imgUrl: product.images[0],
        name: product.name,
        price: product.price,
        discount: product.priceDiscount,
        color: product.colors[0].name,
        size: product.sizes ? product?.sizes[0].name : null,
      }),
    )
    toast.success('Item add to cart')
  }

  const dispatch = useAppDispatch()
  return (
    <div
      onClick={handleNavigateTo}
      className=" cursor-pointer  w-full  relative overflow-hidden group"
    >
      <button className="flex absolute  opacity-0 group-hover:opacity-100 transition-opacity  right-4 top-4 z-10 items-center justify-center gap-1 text-zinc-400 bg-zinc-50 p-2 rounded-md  hover:text-zinc-900  hover:bg-zinc-200">
        <Heart size={24} />
      </button>

      <div className="cursor-pointer  relative overflow-hidden group">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full max-h-[300px] aspect-square h-full "
        />

        <div className=" transition-all duration-500 translate-y-[100%] group-hover:translate-y-0 flex items-center justify-center flex-col absolute w-full h-full   inset-0  ">
          <button
            onClick={handleAddItemToCart}
            className="flex items-center justify-center gap-1 text-zinc-400 bg-zinc-50 rounded-lg size-16 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
          >
            <ShoppingCartIcon size={28} />
          </button>
        </div>
      </div>

      <main className=" pt-4  sm:pb-8  ">
        <h3 className="sm:text-xl text-base  truncate font-semibold text-zinc-900 text-nowrap text-ellipsis max-w-full overflow-hidden">
          {product.name}
        </h3>

        <div className="flex w-full justify-between items-center mt-4">
          <div className=" flex gap-4 items-center">
            {product.priceDiscount > 0 ? (
              <>
                <span className="text-zinc-400 text-sm font-medium line-through">
                  {FormateMoney(product.price)}
                </span>
                <strong className="text-zinc-900  font-semibold">
                  {FormateMoney(
                    product.price -
                      product.price * (product.priceDiscount / 100),
                  )}
                </strong>
              </>
            ) : (
              <strong className="text-gray-500 text-xl font-semibold">
                {FormateMoney(product.price)}
              </strong>
            )}
          </div>

          <div>
            <ul className="flex flex-row-reverse relative group/colors ">
              {product.colors.map((color, index) => (
                <li
                  key={product.id + color.name}
                  style={{
                    background: color.hex,
                    zIndex: -index,
                    transform: `translateX(${index * 11}px)`,
                  }}
                  className="size-5 border block border-white group-hover/colors:!translate-x-0 transition-all  relative    bg-zinc-300 rounded-full"
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      {product.priceDiscount > 0 && (
        <div className=" px-2 py-1  flex absolute  items-center justify-center  top-6 left-6 bg-zinc-50">
          <span className="font-medium text-zinc-900">
            -{product.priceDiscount}%
          </span>
        </div>
      )}

      {product.priceDiscount === 0 && product.isNew && (
        <div className=" px-2 py-1  flex absolute items-center justify-center  top-6 left-6 bg-zinc-50">
          <span className="font-medium text-zinc-900">New</span>
        </div>
      )}
    </div>
  )
}

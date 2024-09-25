import { FormateMoney } from '@/utils/formate-money'
import { Button } from '@components/ui/button'
import { Gallery } from './gallery'
import { Infos } from './Infos'
import { SelectColor } from './select-color'
import { SelectSize } from './select-size'
import { StarsRate } from './stars-rate'

import { toast } from 'sonner'
import { useAppDispatch } from '@/stores'
import { addProduct } from '@/stores/modules/cart'
import { Products } from '@/types/products'
import { useState } from 'react'

type ProductDetailsProps = {
  product: Products
}
export function ProductDetails({ product }: ProductDetailsProps) {
  const [color, setColor] = useState(product.colors[0].name)
  const [size, setSize] = useState(() => {
    if (product.sizes) return product.sizes[0].name
    return null
  })
  const dispatch = useAppDispatch()

  const isOnSales = product.priceDiscount > 0

  function handleSelectColor(color: string) {
    setColor(color)
  }
  function handleSelectSize(size: string) {
    setSize(size)
  }

  function handleAddToCart() {
    dispatch(
      addProduct({
        id: product.id,
        imgUrl: product.images[0],
        name: product.name,
        price: product.price,
        color,
        discount: 8,
        size,
      }),
    )

    toast.success('Item added to cart', { duration: 2000 })
  }

  return (
    <>
      <section>
        <div className="px-8 container mx-auto flex  max-lg:flex-wrap gap-8 xl:gap-[6.5625rem]">
          <Gallery images={product.images} />
          <div className="lg:w-full xl:w-auto">
            <div className="border-b border-zinc-200 pb-12  ">
              <h1 className="md:text-[2.625rem] text-3xl sm:text-4xl text-zinc-900 font-manrope font-medium">
                {product.name}
              </h1>

              {!isOnSales && (
                <h3 className="text-2xl text-zinc-400 font-medium mt-2 ">
                  {FormateMoney(product.price)}
                </h3>
              )}
              {isOnSales && (
                <div className=" mt-2 items-center flex gap-4">
                  <h3 className="text-xl text-zinc-400 font-medium line-through">
                    {FormateMoney(product.price)}
                  </h3>
                  <h3 className="text-zinc-900  font-semibold text-2xl">
                    {FormateMoney(
                      product.price -
                        product.price * (product.priceDiscount / 100),
                    )}
                  </h3>
                </div>
              )}
              <div className="flex items-center mt-4 gap-5">
                <StarsRate rate={product.rate} />
              </div>
              <p className="sm:text-base text-sm text-zinc-400 max-w-[35.5rem] mt-5">
                {product.description}
              </p>
              <div className="flex md:gap-10 gap-2 md:flex-row flex-wrap flex-col">
                {product.sizes && (
                  <SelectSize
                    onSelectSize={handleSelectSize}
                    sizes={product.sizes}
                  />
                )}
                <SelectColor
                  onSelectColor={handleSelectColor}
                  colors={product.colors}
                />
              </div>

              <div className="flex gap-4 mt-8">
                <Button variants="outline" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              </div>
            </div>
            <Infos category={product.category} tags={product.tags} />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200  mt-16 pt-12 pb-16 px-8">
        <div className="container mx-auto ">
          <div className="flex items-center sm:justify-center flex-wrap justify-between sm:gap-[103px]">
            <h3 className="font-medium lg:text-2xl text-lg">Description</h3>
            <h3 className="text-zinc-400 lg:text-2xl text-lg">
              Additional Information
            </h3>
          </div>
          <div className="max-w-5xl mx-auto mt-9">
            <p className="text-zinc-400 lg:text-base text-sm">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-zinc-400 mt-8 lg:text-base text-sm">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-9">
            <img
              src={product.images[0]}
              className="w-full max-h-[380px] object-cover"
              alt="image 1"
            />
            <img
              src={product.images[1]}
              className="w-full max-h-[380px] object-cover"
              alt="image 1"
            />
          </div>
        </div>
      </section>
    </>
  )
}

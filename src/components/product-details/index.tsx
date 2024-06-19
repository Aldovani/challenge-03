import { useDispatch, useSelector } from 'react-redux'
import { Products } from '../../services/api/products'
import { FormateMoney } from '../../utils/formate-money'
import { Button } from '../button'
import { Quantity } from '../cart-table/quantity'
import { Gallery } from './gallery'
import { Infos } from './Infos'
import { SelectColor } from './select-color'
import { SelectSize } from './select-size'
import { StarsRate } from './stars-rate'
import { IState } from '../../stores'
import { ICartItem } from '../../stores/modules/cart/types'
import {
  addProductToCart,
  deleteProductToCart,
} from '../../stores/modules/cart/actions'
import { toast } from 'sonner'

type ProductDetailsProps = {
  product: Products
}
export function ProductDetails({ product }: ProductDetailsProps) {
  const productInCar = useSelector<IState, ICartItem | undefined>((state) =>
    state.cart.items.find((item) => item.product.id === product.id),
  )

  const dispatch = useDispatch()

  return (
    <>
      <section>
        <div className="mt-9 max-sm:px-8 container mx-auto flex max-lg:justify-center max-lg:flex-wrap gap-10 sm:gap-[6.5625rem]">
          <Gallery images={product.images} />
          <div>
            <div className="border-b pb-16">
              <h1 className="text-[2.625rem]">{product.name}</h1>
              <h3 className="text-2xl text-gray-200 font-medium">
                {FormateMoney(product.price)}
              </h3>
              <div className="flex items-center mt-4 gap-5">
                <StarsRate rate={product.rate} />
              </div>
              <p className="text-[0.8125rem] max-w-[26.5rem] mt-5">
                {product.description}
              </p>
              <SelectSize />
              <SelectColor />

              <div className="flex gap-4 mt-8">
                {productInCar ? (
                  <>
                    <Quantity
                      product={{
                        name: product.name,
                        price: product.price,
                        id: product.id,
                        imgUrl: product.images[0],
                      }}
                    />
                    <Button
                      variants="outline"
                      onClick={() => {
                        dispatch(deleteProductToCart(product.id))
                        toast.success('Item removido ao carrinho')
                      }}
                    >
                      Remove from Cart
                    </Button>
                  </>
                ) : (
                  <Button
                    variants="outline"
                    onClick={() => {
                      dispatch(
                        addProductToCart({
                          id: product.id,
                          imgUrl: product.images[0],
                          name: product.name,
                          price: product.price,
                        }),
                      )

                      toast.success('Item adicionado ao carrinho')
                    }}
                  >
                    Add To Cart
                  </Button>
                )}
              </div>
            </div>
            <Infos category={product.category} tags={product.tags} />
          </div>
        </div>
      </section>

      <section className="border-y  mt-16 pt-12 pb-16">
        <div className="container mx-auto max-sm:px-8 ">
          <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-[103px]">
            <h3 className="font-medium text-2xl">Description</h3>
            <h3 className="text-gray-200 text-2xl">Additional Information</h3>
          </div>
          <div className="max-w-5xl mx-auto mt-9">
            <p className="text-gray-200">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-200 mt-8">
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
              className="w-full max-h-[380px] object-cover rounded-[0.625rem]"
              alt="image 1"
            />
            <img
              src={product.images[1]}
              className="w-full max-h-[380px] object-cover rounded-[0.625rem]"
              alt="image 1"
            />
          </div>
        </div>
      </section>
    </>
  )
}

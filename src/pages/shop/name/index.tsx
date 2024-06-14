import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../../components/breadcrumb'
import { Button } from '../../../components/button'
import { Quantity } from '../../../components/cart-table/quantity'
import { ProductList } from '../../../components/product/product-list'
import { SelectColor } from '../../../components/select-color'
import { SelectSize } from '../../../components/select-size'
import { Gallery } from '../../../components/gallery'

const images = [
  '/sofa-1.png',
  '/sofa-2.png',
  '/sofa-1.png',
  '/sofa-2.png',
  '/sofa-1.png',
  '/sofa-2.png',
]

export function ProductDetailsPage() {
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Breadcrumb name="Asgaard sofa" />

      <section>
        <div className="mt-9 max-sm:px-8 container mx-auto flex max-lg:flex-wrap gap-10 sm:gap-[6.5625rem]">
          <Gallery images={images} />
          <div>
            <div className="border-b pb-16">
              <h1 className="text-[2.625rem]">Asgaard sofa</h1>
              <h3 className="text-2xl text-gray-200 font-medium">
                Rs. 250,000.00
              </h3>
              <div className="flex items-center mt-4 gap-5">
                <div className="flex  ">
                  <img src="/star-filled.svg" alt="" />
                  <img src="/star-filled.svg" alt="" />
                  <img src="/star-filled.svg" alt="" />
                  <img src="/star-filled.svg" alt="" />
                  <img src="/star-half.svg" alt="" />
                </div>
                <span className="h-[37px] w-[1px] bg-gray-200"></span>
                <span className="text-[0.8125rem]  text-gray-200">
                  5 Customer Review
                </span>
              </div>
              <p className="text-[0.8125rem] max-w-[26.5rem] mt-5">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <SelectSize />
              <SelectColor />

              <div className="flex gap-4 mt-8">
                <Quantity />
                <Button variants="outline">Add To Cart</Button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
                <span className="text-gray-200 ">SKU</span>
                <span className="text-gray-200">:</span>
                <span className="text-gray-200">SS001</span>
              </div>
              <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
                <span className="text-gray-200">Category</span>
                <span className="text-gray-200">:</span>
                <span className="text-gray-200">Sofas</span>
              </div>
              <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
                <span className="text-gray-200">Tags</span>
                <span className="text-gray-200">:</span>
                <span className="text-gray-200">Sofa, Chair, Home, Shop</span>
              </div>
              <div className="grid grid-cols-[80px_30px_1fr] gap-8 mt-3">
                <span className="text-gray-200">Share</span>
                <span className="text-gray-200">:</span>
                <span className="flex gap-6">
                  <img src="/facebook-fill.svg" alt="" />
                  <img src="/linkedin-box-fill.svg" alt="" />
                  <img src="/twitter-circle-filled.svg" alt="" />
                </span>
              </div>
            </div>
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
          <div className="flex gap-8  flex-wrap justify-center mt-9">
            <img src="/sofa-1.png" alt="" />
            <img src="/sofa-2.png" alt="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-14 mb-[5.75rem]">
        <h3 className="text-center text-4xl mb-6 font-medium">
          Related Products
        </h3>
        <ProductList />

        <Link
          to="/shop"
          className="mt-11 flex w-fit  justify-center  mx-auto py-3 px-20 border border-primary-500 text-primary-500 font-semibold transition-colors hover:text-white hover:bg-primary-500"
        >
          Show More
        </Link>
      </section>
    </main>
  )
}

import { Link } from '../components/Link'
import { ProductList } from '../components/product/product-list'

export function HomePage() {
  return (
    <>
      <div className="pt-28">
        <main className="bg-[url(/hero.jpg)] pt-40 pb-32">
          <div className="mx-auto container grid grid-cols-1 lg:grid-cols-2  max-sm:px-8 ">
            <div className="pt-16 px-10 pb-10  bg-primary-400 rounded-[0.625rem] col-start-2 col-end-3">
              <span className="text-2xl font-semibold text-[#333] tracking-[3px]">
                New Arrival
              </span>
              <h1 className="text-[52px] font-bold text-primary-500">
                Discover Our New Collection
              </h1>
              <p className="mt-4 text-lg text-[#333] font-medium max-w-[546px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>

              <Link to="/shop" className="py-6 w-fit px-[72px] mt-12">
                BUY NOW
              </Link>
            </div>
          </div>
        </main>
      </div>

      <section className="container mx-auto py-14 flex flex-col items-center">
        <h3 className="font-bold text-[2rem] ">Browse The Range</h3>
        <p className="text-[#666] text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid mt-16 justify-center grid-cols-[380px_380px_380px] gap-5">
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src="/dining.png"
                className="hover:scale-125 transition-transform "
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-[#333]">Dining</span>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src="/livingroom.png"
                className="hover:scale-125  transition-transform "
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-[#333]">Living</span>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src="/bedroom.png"
                className="hover:scale-125 transition-transform "
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-[#333] ">Bedroom</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h3 className="text-[40px] font-semibold text-center mb-8">
          Our Products
        </h3>

        <ProductList />

        <Link to="/shop" variants="outline" className="mt-11 w-fit mx-auto">
          Show More
        </Link>
      </section>

      <section></section>

      <section className=" max-w-[1440px] overflow-hidden mx-auto  ">
        <div>
          <span>Share your setup with</span>
          <h3>#FuniroFurniture</h3>
        </div>

        <div className="relative w-[1440px]  h-[780px] xl:overflow-hidden">
          <img
            src="/image 1-1.png"
            alt=""
            className="absolute left-0 top-0  -translate-x-[196px]"
          />
          <img
            src="/image 2.png"
            alt=""
            className="absolute  top-[70px] left-[94px] "
          />
          <img
            src="/image 3.png"
            alt=""
            className="absolute top-[156px] left-[561px] "
          />
          <img
            src="/image 4.png"
            alt=""
            className="absolute top-[85px] right-[278px]  "
          />
          <img
            src="/image 5.png"
            alt=""
            className="absolute  right-0  translate-x-[163px]"
          />
          <img
            src="/image 6.png"
            alt=""
            className="absolute left-0 top-[398px] -translate-x-[196px]"
          />
          <img
            src="/image 7.png"
            alt=""
            className="absolute left-[201px] top-[398px] "
          />
          <img
            src="/image 8.png"
            alt=""
            className="absolute right-[390px] top-[449px] "
          />
          <img
            src="/image 9.png"
            alt=""
            className="absolute right-[116px] top-[449px]"
          />
        </div>
      </section>
    </>
  )
}

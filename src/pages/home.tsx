import { IMAGES } from '../assets/images'
import { Link } from '../components/Link'
import { Slide } from '../components/slide'

export function HomePage() {
  return (
    <>
      <div className="pt-28">
        <main
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
          className="pt-40 pb-32"
        >
          <div className="mx-auto container grid grid-cols-1 lg:grid-cols-2  max-sm:px-8 ">
            <div className="pt-16 px-10 pb-10  bg-primary-400 rounded-[0.625rem] col-start-2 col-end-3">
              <span className="text-xl lg:text-2xl font-semibold text-[#333] tracking-[3px]">
                New Arrival
              </span>
              <h1 className="lg:text-[52px] text-5xl font-bold text-primary-500">
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

      <section className="container mx-auto max-sm:px-8 py-14 flex flex-col items-center">
        <h3 className="font-bold text-[2rem] ">Browse The Range</h3>
        <p className="text-[#666] text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid mt-16 justify-center    grid-cols-1  lg:grid-cols-[380px_380px_380px] gap-5">
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src={IMAGES.dining}
                className="hover:scale-125 transition-transform "
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-[#333]">Dining</span>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src={IMAGES.livingroom}
                className="hover:scale-125  transition-transform "
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-[#333]">Living</span>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="overflow-hidden rounded-[10px] ">
              <img
                src={IMAGES.bedroom}
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

        {/* <ProductList items={products} isLoading={loading} /> */}

        <Link to="/shop" variants="outline" className="mt-11 w-fit mx-auto">
          Show More
        </Link>
      </section>

      <section className="bg-primary-100 py-11  mt-16">
        <div className="container mx-auto relative max-md:px-8  grid-cols-1 grid lg:grid-cols-[422px_1fr] items-center  gap-10">
          <div>
            <h2 className="text-[2.5rem] font-bold text-gray-500 ">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="font-medium text-gray-400 mt-2">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link to="/shop" className="mt-6">
              Explore More
            </Link>
          </div>
          <div className="home-page">
            <Slide />
          </div>
        </div>
      </section>

      <section className=" container mt-16  mx-auto  ">
        <div className=" flex flex-col justify-center items-center">
          <span className="text-gray-400 font-semibold text-xl">
            Share your setup with
          </span>
          <h3 className="text-[2.5rem] font-bold text-gray-500 mt-2">
            #FuniroFurniture
          </h3>
        </div>

        <div className="relative w-[1440px]  h-[780px] ">
          <img
            src={IMAGES['furniture-1']}
            alt=""
            className="absolute left-0 top-0  -translate-x-[196px]"
          />
          <img
            src={IMAGES['furniture-2']}
            alt=""
            className="absolute  top-[70px] left-[94px] "
          />
          <img
            src={IMAGES['furniture-3']}
            alt=""
            className="absolute top-[156px] left-[561px] "
          />
          <img
            src={IMAGES['furniture-4']}
            alt=""
            className="absolute top-[85px] right-[278px]  "
          />
          <img
            src={IMAGES['furniture-5']}
            alt=""
            className="absolute  right-0  translate-x-[163px]"
          />
          <img
            src={IMAGES['furniture-6']}
            alt=""
            className="absolute left-0 top-[398px] -translate-x-[196px]"
          />
          <img
            src={IMAGES['furniture-7']}
            alt=""
            className="absolute left-[201px] top-[398px] "
          />
          <img
            src={IMAGES['furniture-8']}
            alt=""
            className="absolute right-[390px] top-[449px] "
          />
          <img
            src={IMAGES['furniture-9']}
            alt=""
            className="absolute right-[116px] top-[449px]"
          />
        </div>
      </section>
    </>
  )
}

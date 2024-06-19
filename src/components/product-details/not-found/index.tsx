import { IMAGES } from '../../../assets/images'
import { Link } from '../../Link'

export function ProductNotFound() {
  return (
    <div
      style={{ backgroundImage: `url(${IMAGES['product-not-found']})` }}
      className="flex items-center justify-center bg-fixed  pt-[100px] w-full h-screen bg-center  bg-cover relative after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/30 after:z-[0]"
    >
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-[52px] font-bold text-white text-center">
          Product Not Found
        </h1>
        <p className="text-white max-w-[390px] mt-4 mx-auto text-center font-medium text-lg">
          We&prime;re sorry, but the product you&prime;re looking for
          isn&prime;t available.
        </p>
        <Link to="/shop" className="mt-4 w-fit mx-auto">
          Go to shopping
        </Link>
      </div>
    </div>
  )
}

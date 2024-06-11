import { Link } from 'react-router-dom'

export function ProductItem() {
  return (
    <Link to="/" className="bg-gray-50 relative">
      <img src="/image 1.png" alt="" className="w-full" />

      <main className="pl-4 pr-5 pt-4 pb-8">
        <h3 className="text-2xl font-semibold text-gray-500">Syltherine</h3>
        <span className="mt-2 block font-medium text-gray-300">
          Stylish cafe chair
        </span>
        <div className="mt-2 flex justify-between items-center">
          <strong className="text-gray-500 text-xl font-semibold">
            Rp 2.500.000
          </strong>
          <span className="text-gray-100 line-through">Rp 3.500.000</span>
        </div>
      </main>

      {/* <div className="size-12 flex absolute rounded-full items-center justify-center  top-6 right-6 bg-action-error">
        <span className="font-medium text-white">-50%</span>
      </div> */}
      <div className="size-12 flex absolute rounded-full items-center justify-center  top-6 right-6 bg-action-success">
        <span className="font-medium text-white">New</span>
      </div>

      {/* <div className="flex items-center justify-center flex-col absolute w-full h-full bg-gray-400 inset-0 opacity-[72%]">
        <button className="px-4 py-2 bg-white">Add to cart</button>
      </div> */}
    </Link>
  )
}

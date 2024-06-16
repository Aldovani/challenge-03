import { ICONS } from '../../assets/icons'

export function Benefits() {
  return (
    <section className=" py-[6.25rem] bg-primary-200">
      <div className="  max-w-[83.375rem] w-full flex-wrap gap-8 px-4 items-center flex justify-between items-center mx-auto">
        <div className="flex items-center gap-3">
          <img src={ICONS.trophy} alt="trophy icon" />
          <div>
            <h4 className="text-2xl font-semibold text-gray-600">
              High Quality
            </h4>
            <span className="font-medium text-xl text-gray-300">
              crafted from top materials
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={ICONS.guarantee} alt="guarantee icon" />
          <div>
            <h4 className="text-2xl font-semibold text-gray-600">
              Warranty Protection
            </h4>
            <span className="font-medium text-xl text-gray-300">
              Over 2 years
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={ICONS.shipping} alt="shipping icon" />
          <div>
            <h4 className="text-2xl font-semibold text-gray-600">
              Free Shipping
            </h4>
            <span className="font-medium text-xl text-gray-300">
              Order over 150 $
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={ICONS['customer-support']} alt="customer-support icon" />
          <div>
            <h4 className="text-2xl font-semibold text-gray-600">
              24 / 7 Support
            </h4>
            <span className="font-medium text-xl text-gray-300">
              Dedicated support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

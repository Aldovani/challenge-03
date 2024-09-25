import { Link } from '@/components/ui/Link'

export function CartEmptyList() {
  return (
    <section className="flex justify-center items-center flex-col py-16">
      <h3 className="text-4xl font-manrope text-zinc-900">
        Your cart is empty!
      </h3>
      <p className="text-zinc-400 mt-2">
        Looks like you haven’t added anything to your cart yet.
      </p>
      <Link to="/shop" className="mt-4">
        Shop
      </Link>
    </section>
  )
}

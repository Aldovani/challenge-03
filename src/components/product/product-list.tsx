import { IMAGES } from '../../assets/images'
import { ProductItem } from './product-item'

const products = [
  {
    name: 'Contemporary Leather Sofa',
    id: 1,
    style: 'Contemporary',
    price: 1999.0,
    description:
      'Make a statement in your living space with this sleek and sophisticated contemporary leather sofa. Its clean lines and rich leather upholstery exude luxury.',
    rate: 4.7,
    images: [IMAGES['furniture-4']],
    priceDiscount: 0,
    isNew: false,
    category: 'Sofas',
    tags: ['Leather', 'Contemporary', 'Stylish', 'Luxury'],
  },
  {
    name: 'Mid-Century Modern Sofa',
    id: 2,
    style: 'Mid-Century Modern',
    price: 1399.0,
    description:
      'Step back in time with the timeless elegance of a mid-century modern sofa. Tapered legs, soft curves, and plush cushions exude retro charm.',
    rate: 4.2,
    images: [IMAGES['furniture-3']],
    priceDiscount: 0,
    isNew: true,
    category: 'Sofas',
    tags: ['Mid-Century Modern', 'Retro', 'Stylish', 'Comfortable'],
  },
  {
    name: 'Scandinavian Sofa',
    id: 3,
    style: 'Scandinavian',
    price: 1199.0,
    description:
      'Embrace the minimalist beauty of Scandinavian design with this sleek and functional Scandinavian sofa. Its clean lines and neutral tones create a sense of calm and tranquility.',
    rate: 4.6,
    images: [IMAGES['furniture-1']],
    priceDiscount: 50,
    isNew: false,
    category: 'Sofas',
    tags: ['Scandinavian', 'Minimalist', 'Functional', 'Relaxing'],
  },
  {
    name: 'Plush Velvet Sofa',
    id: 4,
    style: 'Glamorous',
    price: 1799.0,
    description:
      'Add a touch of luxury to your living room with this sumptuous plush velvet sofa. Its soft, inviting texture and rich color will make you feel like royalty.',
    rate: 4.9,
    images: [IMAGES['furniture-2']],
    priceDiscount: 0,
    isNew: true,
    category: 'Sofas',
    tags: ['Velvet', 'Glamorous', 'Luxurious', 'Inviting'],
  },
]

export function ProductList() {
  return (
    <section className="grid px-8 sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </section>
  )
}

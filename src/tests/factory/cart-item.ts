import { ICartItem } from '../../stores/modules/cart/types'
import { faker } from '@faker-js/faker'

function makeICartItem() {
  return {
    product: {
      name: faker.name.fullName(),
      id: faker.number.int().toString(),
      price: faker.number.float(),
      imgUrl: faker.image.url(),
    },
    quantity: faker.number.int(),
  } as ICartItem
}

export function FactoryICartItem(size: number) {
  const products: ICartItem[] = []

  for (let i = 0; i <= size; i++) {
    products.push(makeICartItem())
  }

  return products
}

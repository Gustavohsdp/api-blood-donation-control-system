import { randomInt } from 'node:crypto'

import { Product } from '@prisma/client'

import {
  CreateProps,
  ProductsRepository,
  UpdateProps
} from '../products-repository'

export class InMemororyProductsRepository implements ProductsRepository {
  public items: Product[] = []

  async create(data: CreateProps) {
    const { donationId, label, validity } = data

    const product = {
      id: randomInt(1000),
      donationId,
      label,
      validity,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(product)

    return product
  }

  async update({ id, donationId, label, validity }: UpdateProps) {
    const productIndex = this.items.findIndex((item) => item.id === id)

    if (productIndex >= 0) {
      this.items[productIndex] = {
        id,
        donationId,
        label,
        validity,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const product = this.items.find((item) => item.id === id)

      return product
    }
  }

  async delete(id: number) {
    const productIndex = this.items.findIndex((item) => item.id === id)

    if (productIndex >= 0) {
      this.items.splice(productIndex, 1)
    }
  }

  async findById(id: number) {
    const product = this.items.find((item) => item.id === id)

    if (!product) {
      return null
    }

    return product
  }

  async findMany() {
    return this.items
  }
}

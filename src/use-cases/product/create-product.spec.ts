import { InMemororyProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { beforeEach, describe, expect, it } from 'vitest'

import { CreateProductUseCase } from './create-product-use-case'

let productsRepository: InMemororyProductsRepository
let sut: CreateProductUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemororyProductsRepository()
    sut = new CreateProductUseCase(productsRepository)
  })

  it('should be able create product', async () => {
    const { product } = await sut.execute({
      label: 'Frasco',
      donationId: 1,
      validity: new Date(),
    })

    expect(product.id).toEqual(expect.any(Number))
  })
})

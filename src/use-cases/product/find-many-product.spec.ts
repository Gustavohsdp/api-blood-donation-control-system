import { InMemororyProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateProductUseCase } from './create-product-use-case'
import { FindManyProductUseCase } from './find-many-product-use-case'

let productsRepository: InMemororyProductsRepository
let createProduct: CreateProductUseCase
let sut: FindManyProductUseCase

describe('Find Many Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemororyProductsRepository()
    createProduct = new CreateProductUseCase(productsRepository)
    sut = new FindManyProductUseCase(productsRepository)
  })

  it('should be able find many products', async () => {
    await createProduct.execute({
      label: 'Frasco',
      donationId: 1,
      validity: new Date(),
    })

    await createProduct.execute({
      label: 'Frasco2',
      donationId: 1,
      validity: new Date(),
    })

    const { products } = await sut.execute()

    expect(products).toHaveLength(2)
    expect(products).toEqual([
      expect.objectContaining({
        label: 'Frasco',
      }),
      expect.objectContaining({
        label: 'Frasco2',
      }),
    ])
  })
})

import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyProductsRepository } from './../../repositories/in-memory/in-memory-products-repository'
import { CreateProductUseCase } from './create-product-use-case'
import { FindByIdProductUseCase } from './find-by-id-product-use-case'

let productsRepository: InMemororyProductsRepository
let createProduct: CreateProductUseCase
let sut: FindByIdProductUseCase

describe('Find By Id Unity Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemororyProductsRepository()
    createProduct = new CreateProductUseCase(productsRepository)
    sut = new FindByIdProductUseCase(productsRepository)
  })

  it('should be able unity find by id', async () => {
    const { product: created } = await createProduct.execute({
      label: 'Frasco',
      donationId: 1,
      validity: new Date(),
    })

    const { product } = await sut.execute({
      productId: created.id,
    })

    expect(product.id).toEqual(expect.any(Number))
  })
})

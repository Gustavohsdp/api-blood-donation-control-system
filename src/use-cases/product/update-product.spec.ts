import { InMemororyProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateProductUseCase } from './create-product-use-case'
import { UpdateProductUseCase } from './update-product-use-case'

let productsRepository: InMemororyProductsRepository
let createProduct: CreateProductUseCase
let sut: UpdateProductUseCase

describe('Update Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemororyProductsRepository()
    createProduct = new CreateProductUseCase(productsRepository)
    sut = new UpdateProductUseCase(productsRepository)
  })

  it('should be able update peoduct', async () => {
    const { product: created } = await createProduct.execute({
      label: 'Frasco',
      donationId: 1,
      validity: new Date(),
    })

    const { product } = await sut.execute({
      donationId: created.donationId,
      productId: created.id,
      label: 'Frasco2',
      validity: created.validity,
    })

    expect(product?.label).toEqual('Frasco2')
  })
})

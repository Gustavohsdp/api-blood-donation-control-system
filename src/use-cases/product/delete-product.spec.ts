import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyProductsRepository } from './../../repositories/in-memory/in-memory-products-repository'
import { CreateProductUseCase } from './create-product-use-case'
import { FindByIdProductUseCase } from './find-by-id-product-use-case'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { DeleteProductUseCase } from './delete-product-use-case'

let productsRepository: InMemororyProductsRepository
let createProduct: CreateProductUseCase
let findByIdProductUseCase: FindByIdProductUseCase
let sut: DeleteProductUseCase

describe('Delete Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemororyProductsRepository()
    createProduct = new CreateProductUseCase(productsRepository)
    findByIdProductUseCase = new FindByIdProductUseCase(productsRepository)
    sut = new DeleteProductUseCase(productsRepository)
  })

  it('should be able delete product', async () => {
    const { product } = await createProduct.execute({
      label: 'Frasco',
      donationId: 1,
      validity: new Date(),
    })

    await sut.execute({
      productId: product.id,
    })

    await expect(() =>
      findByIdProductUseCase.execute({
        productId: product.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdProductUseCaseRequest {
  productId: number
}

interface FindByIdProductUseCaseResponse {
  product: Product
}

export class FindByIdProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    productId,
  }: FindByIdProductUseCaseRequest): Promise<FindByIdProductUseCaseResponse> {
    const product = await this.productsRepository.findById(productId)

    if (!product) {
      throw new ResourceNotFoundError()
    }

    return { product }
  }
}

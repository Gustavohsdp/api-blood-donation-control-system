import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface FindManyProductUseCaseResponse {
  products: Product[]
}

export class FindManyProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<FindManyProductUseCaseResponse> {
    const products = await this.productsRepository.findMany()

    return { products }
  }
}

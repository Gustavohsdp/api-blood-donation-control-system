import { ProductsRepository } from '@/repositories/products-repository'

interface DeleteProductUseCaseRequest {
  productId: number
}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId }: DeleteProductUseCaseRequest): Promise<void> {
    await this.productsRepository.delete(productId)
  }
}

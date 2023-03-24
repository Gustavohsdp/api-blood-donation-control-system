import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface CreateProductUseCaseRequest {
  label: string
  validity: Date
  donationId: number
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    donationId,
    label,
    validity,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      donationId,
      label,
      validity,
    })

    return { product }
  }
}

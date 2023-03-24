import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface UpdateProductUseCaseRequest {
  productId: number

  label: string
  validity: Date
  donationId: number
}

interface UpdateProductUseCaseResponse {
  product: Product | undefined
}

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    donationId,
    label,
    productId,
    validity,
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const product = await this.productsRepository.update({
      donationId,
      id: productId,
      label,
      validity,
    })

    return { product }
  }
}

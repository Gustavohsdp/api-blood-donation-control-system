import { PrismaProductsRepository } from '@/repositories/prisma/prisma-product-repository'
import { CreateProductUseCase } from '@/use-cases/product/create-product-use-case'

export function makeCreateProductUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository()

  const useCase = new CreateProductUseCase(prismaProductsRepository)

  return useCase
}

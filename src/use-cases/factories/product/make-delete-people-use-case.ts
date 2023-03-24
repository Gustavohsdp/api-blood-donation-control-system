import { DeleteProductUseCase } from '@/use-cases/product/delete-product-use-case'
import { PrismaProductsRepository } from './../../../repositories/prisma/prisma-product-repository'

export function makeDeleteProductUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository()

  const useCase = new DeleteProductUseCase(prismaProductsRepository)

  return useCase
}

import { PrismaProductsRepository } from './../../../repositories/prisma/prisma-product-repository'
import { UpdateProductUseCase } from './../../product/update-product-use-case'

export function makeUpdateProductUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository()

  const useCase = new UpdateProductUseCase(prismaProductsRepository)

  return useCase
}

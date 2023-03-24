import { PrismaProductsRepository } from './../../../repositories/prisma/prisma-product-repository'
import { FindByIdProductUseCase } from './../../product/find-by-id-product-use-case'

export function makeFindByIdProductUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository()

  const useCase = new FindByIdProductUseCase(prismaProductsRepository)

  return useCase
}

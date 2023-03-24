import { PrismaProductsRepository } from './../../../repositories/prisma/prisma-product-repository'
import { FindManyProductUseCase } from './../../product/find-many-product-use-case'

export function makeFindManyProductUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository()

  const useCase = new FindManyProductUseCase(prismaProductsRepository)

  return useCase
}

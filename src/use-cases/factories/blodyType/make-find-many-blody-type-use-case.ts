import { PrismaBlodyTypesRepository } from '@/repositories/prisma/prisma-blody-type-repository'
import { FindManyBlodyTypeUseCase } from '@/use-cases/blodyType/find-many-blody-type-use-case'

export function makeFindManyBlodyTypeUseCase() {
  const prismaBlodyTypesRepository = new PrismaBlodyTypesRepository()

  const useCase = new FindManyBlodyTypeUseCase(prismaBlodyTypesRepository)

  return useCase
}

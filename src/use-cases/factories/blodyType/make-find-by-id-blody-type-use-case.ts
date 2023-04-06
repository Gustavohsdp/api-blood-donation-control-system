import { PrismaBlodyTypesRepository } from '@/repositories/prisma/prisma-blody-type-repository'
import { FindByIdBlodyTypeUseCase } from '@/use-cases/blodyType/find-by-id-blody-type-use-case'

export function makeFindByIdBlodyTypeUseCase() {
  const prismaBlodyTypesRepository = new PrismaBlodyTypesRepository()

  const useCase = new FindByIdBlodyTypeUseCase(prismaBlodyTypesRepository)

  return useCase
}

import { PrismaBlodyTypesRepository } from '@/repositories/prisma/prisma-blody-type-repository'
import { UpdateBlodyTypeUseCase } from '@/use-cases/blodyType/update-blody-type-use-case'

export function makeUpdateBlodyTypeUseCase() {
  const prismaBlodyTypesRepository = new PrismaBlodyTypesRepository()

  const useCase = new UpdateBlodyTypeUseCase(prismaBlodyTypesRepository)

  return useCase
}

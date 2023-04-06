import { PrismaBlodyTypesRepository } from '@/repositories/prisma/prisma-blody-type-repository'
import { DeleteBlodyTypeUseCase } from '@/use-cases/blodyType/delete-blody-type-use-case'

export function makeDeleteBlodyTypeUseCase() {
  const prismaBlodyTypesRepository = new PrismaBlodyTypesRepository()

  const useCase = new DeleteBlodyTypeUseCase(prismaBlodyTypesRepository)

  return useCase
}

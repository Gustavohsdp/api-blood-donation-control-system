import { PrismaBlodyTypesRepository } from '@/repositories/prisma/prisma-blody-type-repository'
import { CreateBlodyTypeUseCase } from '@/use-cases/blodyType/create-blody-type-use-case'

export function makeCreateBlodyTypeUseCase() {
  const prismaBlodyTypesRepository = new PrismaBlodyTypesRepository()

  const useCase = new CreateBlodyTypeUseCase(prismaBlodyTypesRepository)

  return useCase
}

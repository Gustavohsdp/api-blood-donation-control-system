import { FindByIdUnityUseCase } from '@/use-cases/unity/find-by-id-unity-use-case'
import { PrismaUnitsRepository } from './../../../repositories/prisma/prisma-units-repository'

export function makeFindByIdUnityUseCase() {
  const prismaUnitsRepository = new PrismaUnitsRepository()

  const useCase = new FindByIdUnityUseCase(prismaUnitsRepository)

  return useCase
}

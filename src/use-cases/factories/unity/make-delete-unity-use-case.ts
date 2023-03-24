import { DeleteUnityUseCase } from '@/use-cases/unity/delete-unity-use-case'
import { PrismaUnitsRepository } from './../../../repositories/prisma/prisma-units-repository'

export function makeDeleteUnityUseCase() {
  const prismaUnitsRepository = new PrismaUnitsRepository()

  const useCase = new DeleteUnityUseCase(prismaUnitsRepository)

  return useCase
}

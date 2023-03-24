import { PrismaUnitsRepository } from '@/repositories/prisma/prisma-units-repository'
import { CreateUnityUseCase } from '@/use-cases/unity/create-unity-use-case'

export function makeCreateUnityUseCase() {
  const prismaUnitsRepository = new PrismaUnitsRepository()

  const useCase = new CreateUnityUseCase(prismaUnitsRepository)

  return useCase
}

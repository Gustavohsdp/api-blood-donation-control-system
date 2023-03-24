import { PrismaUnitsRepository } from './../../../repositories/prisma/prisma-units-repository'
import { UpdateUnityUseCase } from './../../unity/update-unity-use-case'

export function makeUpdateUnityUseCase() {
  const prismaUnitsRepository = new PrismaUnitsRepository()

  const useCase = new UpdateUnityUseCase(prismaUnitsRepository)

  return useCase
}

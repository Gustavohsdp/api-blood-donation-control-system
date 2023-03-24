import { PrismaUnitsRepository } from './../../../repositories/prisma/prisma-units-repository'
import { FindManyUnityUseCase } from './../../unity/find-many-unity-use-case'

export function makeFindManyUnityUseCase() {
  const prismaUnitsRepository = new PrismaUnitsRepository()

  const useCase = new FindManyUnityUseCase(prismaUnitsRepository)

  return useCase
}

import { PrismaStatesRepository } from '../../../repositories/prisma/prisma-states-repository'
import { CreateStateUseCase } from '../../state/create-state-use-case'

export function makeCreateStateUseCase() {
  const prismaStatesRepository = new PrismaStatesRepository()

  const useCase = new CreateStateUseCase(prismaStatesRepository)

  return useCase
}

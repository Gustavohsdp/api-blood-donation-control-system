import { PrismaPeoplesRepository } from '@/repositories/prisma/prisma-peoples-repository'
import { CreatePeopleUseCase } from '@/use-cases/people/create-people-use-case'

export function makeCreatePeopleUseCase() {
  const prismaPeoplesRepository = new PrismaPeoplesRepository()

  const useCase = new CreatePeopleUseCase(prismaPeoplesRepository)

  return useCase
}

import { PrismaPeoplesRepository } from '@/repositories/prisma/prisma-peoples-repository copy'
import { UpdatePeopleUseCase } from '@/use-cases/people/update-people-use-case'

export function makeUpdatePeopleUseCase() {
  const prismaPeoplesRepository = new PrismaPeoplesRepository()

  const useCase = new UpdatePeopleUseCase(prismaPeoplesRepository)

  return useCase
}

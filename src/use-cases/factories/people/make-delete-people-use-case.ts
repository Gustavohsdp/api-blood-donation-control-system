import { PrismaPeoplesRepository } from '@/repositories/prisma/prisma-peoples-repository copy'
import { DeletePeopleUseCase } from '@/use-cases/people/delete-people-use-case'

export function makeDeletePeopleUseCase() {
  const prismaPeoplesRepository = new PrismaPeoplesRepository()

  const useCase = new DeletePeopleUseCase(prismaPeoplesRepository)

  return useCase
}

import { PrismaPeoplesRepository } from '@/repositories/prisma/prisma-peoples-repository copy'
import { FindManyPeopleUseCase } from '@/use-cases/people/find-many-people-use-case'

export function makeFindManyPeopleUseCase() {
  const prismaPeoplesRepository = new PrismaPeoplesRepository()

  const useCase = new FindManyPeopleUseCase(prismaPeoplesRepository)

  return useCase
}

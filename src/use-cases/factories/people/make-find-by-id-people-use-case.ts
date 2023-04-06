import { PrismaPeoplesRepository } from '@/repositories/prisma/prisma-peoples-repository copy'
import { FindByIdPeopleUseCase } from '@/use-cases/people/find-by-id-people-use-case'

export function makeFindByIdPeopleUseCase() {
  const prismaPeoplesRepository = new PrismaPeoplesRepository()

  const useCase = new FindByIdPeopleUseCase(prismaPeoplesRepository)

  return useCase
}

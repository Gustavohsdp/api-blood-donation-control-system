import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository'
import { FindByIdOrNameCityUseCase } from '../../city/find-by-id-or-name-use-case'

export function makeFindByIdOrNameCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository()

  const useCase = new FindByIdOrNameCityUseCase(prismaCitiesRepository)

  return useCase
}

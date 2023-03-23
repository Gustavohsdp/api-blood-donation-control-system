import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository'
import { FindByIdCityUseCase } from './../../city/find-by-id-use-case'

export function makeFindByIdCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository()

  const useCase = new FindByIdCityUseCase(prismaCitiesRepository)

  return useCase
}

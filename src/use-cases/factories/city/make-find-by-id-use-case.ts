import { FindByIdCityUseCase } from '@/use-cases/city/find-by-id-city-use-case'

import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository'

export function makeFindByIdCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository()

  const useCase = new FindByIdCityUseCase(prismaCitiesRepository)

  return useCase
}

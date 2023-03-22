import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository'
import { UpdateCityUseCase } from '../../city/update-city-use-case'

export function makeUpdateCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository()

  const useCase = new UpdateCityUseCase(prismaCitiesRepository)

  return useCase
}

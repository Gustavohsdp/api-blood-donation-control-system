import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository'
import { CreateCityUseCase } from '../../city/create-city-use-case'

export function makeCreateCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository()

  const useCase = new CreateCityUseCase(prismaCitiesRepository)

  return useCase
}

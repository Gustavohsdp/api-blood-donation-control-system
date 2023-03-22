import { City } from '@prisma/client'
import { CitiesRepository } from '../../repositories/cities-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdOrNameCityUseCaseRequest {
  cityId: number
  name: string
}

interface FindByIdOrNameCityUseCaseResponse {
  city: City
}

export class FindByIdOrNameCityUseCase {
  constructor(private cityRepository: CitiesRepository) { }

  async execute({
    cityId,
    name,
  }: FindByIdOrNameCityUseCaseRequest): Promise<FindByIdOrNameCityUseCaseResponse> {
    const city = await this.cityRepository.findByIdOrName({
      cityId,
      name,
    })

    if (!city) {
      throw new ResourceNotFoundError()
    }

    return { city }
  }
}

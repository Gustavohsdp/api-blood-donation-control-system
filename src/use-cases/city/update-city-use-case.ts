import { City } from '@prisma/client'
import { CitiesRepository } from '../../repositories/cities-repository'

interface UpdateCityUseCaseRequest {
  name: string
  stateId: number
  cityId: number
}

interface UpdateCityUseCaseResponse {
  city: City
}

export class UpdateCityUseCase {
  constructor(private cityRepository: CitiesRepository) { }

  async execute({
    name,
    stateId,
    cityId,
  }: UpdateCityUseCaseRequest): Promise<UpdateCityUseCaseResponse> {
    const city = await this.cityRepository.update({
      name,
      stateId,
      cityId,
    })

    return { city }
  }
}

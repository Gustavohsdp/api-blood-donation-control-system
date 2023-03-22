import { CitiesRepository } from '../../repositories/cities-repository'

interface DeleteCityUseCaseRequest {
  cityId: number
}

export class DeleteCityUseCase {
  constructor(private cityRepository: CitiesRepository) { }

  async execute({ cityId }: DeleteCityUseCaseRequest): Promise<void> {
    await this.cityRepository.delete(cityId)
  }
}

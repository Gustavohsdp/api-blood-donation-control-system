import { City } from '@prisma/client';

import { CitiesRepository } from '../../repositories/cities-repository';
import { ResourceNotFoundError } from '../errors/resource-not-found-error';

interface FindByIdCityUseCaseRequest {
  cityId: number;
}

interface FindByIdCityUseCaseResponse {
  city: City;
}

export class FindByIdCityUseCase {
  constructor(private cityRepository: CitiesRepository) {}

  async execute({
    cityId,
  }: FindByIdCityUseCaseRequest): Promise<FindByIdCityUseCaseResponse> {
    const city = await this.cityRepository.findById(cityId);

    if (!city) {
      throw new ResourceNotFoundError();
    }

    return { city };
  }
}

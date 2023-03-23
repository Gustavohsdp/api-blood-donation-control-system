import { City } from '@prisma/client';

import { CitiesRepository } from '../../repositories/cities-repository';

interface CreateCityUseCaseRequest {
  name: string;
  stateId: number;
}

interface CreateCityUseCaseResponse {
  city: City;
}

export class CreateCityUseCase {
  constructor(private cityRepository: CitiesRepository) {}

  async execute({
    name,
    stateId,
  }: CreateCityUseCaseRequest): Promise<CreateCityUseCaseResponse> {
    const city = await this.cityRepository.create({
      name,
      stateId,
    });

    return { city };
  }
}

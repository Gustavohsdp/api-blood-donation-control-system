import { City } from '@prisma/client';

import { CitiesRepository } from '../../repositories/cities-repository';

interface FindManyCityUseCaseResponse {
  cities: City[];
}

export class FindManyCityUseCase {
  constructor(private cityRepository: CitiesRepository) {}

  async execute(): Promise<FindManyCityUseCaseResponse> {
    const cities = await this.cityRepository.findMany();

    return { cities };
  }
}

import { beforeEach, describe, expect, it } from 'vitest';

import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository';

import { CreateCityUseCase } from './create-city-use-case';
import { FindByIdCityUseCase } from './find-by-id-city-use-case';

let citiesRepository: InMemororyCitiesRepository;
let createCity: CreateCityUseCase;
let sut: FindByIdCityUseCase;

describe('Find By Id  City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository();
    createCity = new CreateCityUseCase(citiesRepository);
    sut = new FindByIdCityUseCase(citiesRepository);
  });

  it('should be able city find by id', async () => {
    const { city: created } = await createCity.execute({
      name: 'Belo Horizonte',
      stateId: 10,
    });

    const { city } = await sut.execute({
      cityId: created.id,
    });

    expect(city.id).toEqual(expect.any(Number));
    expect(city.stateId).toEqual(10);
  });
});

import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'

import { CreateCityUseCase } from './create-city-use-case'
import { FindManyCityUseCase } from './find-many-city-use-case'

let citiesRepository: InMemororyCitiesRepository
let createCity: CreateCityUseCase
let sut: FindManyCityUseCase

describe('Find Many City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    createCity = new CreateCityUseCase(citiesRepository)
    sut = new FindManyCityUseCase(citiesRepository)
  })

  it('should be able find many cities', async () => {
    await createCity.execute({
      name: 'Belo Horizonte',
      stateId: 1,
    })

    await createCity.execute({
      name: 'São Paulo',
      stateId: 2,
    })

    const { cities } = await sut.execute()

    expect(cities).toHaveLength(2)
    expect(cities).toEqual([
      expect.objectContaining({
        name: 'Belo Horizonte',
      }),
      expect.objectContaining({
        name: 'São Paulo',
      }),
    ])
  })
})

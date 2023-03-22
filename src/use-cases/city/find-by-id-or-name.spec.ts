import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateCityUseCase } from './create-city-use-case'
import { FindByIdOrNameCityUseCase } from './find-by-id-or-name-use-case'

let citiesRepository: InMemororyCitiesRepository
let createCity: CreateCityUseCase
let sut: FindByIdOrNameCityUseCase

describe('Find By Id Or Name City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    createCity = new CreateCityUseCase(citiesRepository)
    sut = new FindByIdOrNameCityUseCase(citiesRepository)
  })

  it('should be able city find by id or name', async () => {
    const { city: created } = await createCity.execute({
      name: 'Belo Horizonte',
      stateId: 10,
    })

    const { city } = await sut.execute({
      cityId: created.id,
      name: created.name,
    })

    expect(city.id).toEqual(expect.any(Number))
  })
})

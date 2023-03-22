import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateCityUseCase } from './create-city-use-case'
import { UpdateCityUseCase } from './update-city-use-case'

let citiesRepository: InMemororyCitiesRepository
let createCity: CreateCityUseCase
let sut: UpdateCityUseCase

describe('Update City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    createCity = new CreateCityUseCase(citiesRepository)
    sut = new UpdateCityUseCase(citiesRepository)
  })

  it('should be able update city', async () => {
    const { city: created } = await createCity.execute({
      name: 'Belo Horizonte',
      stateId: 10,
    })

    const { city } = await sut.execute({
      cityId: created.id,
      name: 'Rio de Janeiro',
      stateId: created.stateId,
    })

    expect(city.name).toEqual('Rio de Janeiro')
  })
})

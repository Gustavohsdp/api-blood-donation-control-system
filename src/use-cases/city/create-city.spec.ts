import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateCityUseCase } from './create-city-use-case'

let citiesRepository: InMemororyCitiesRepository
let sut: CreateCityUseCase

describe('Create City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    sut = new CreateCityUseCase(citiesRepository)
  })

  it('should be able create city', async () => {
    const { city } = await sut.execute({
      name: 'Belo Horizonte',
      stateId: 10,
    })

    expect(city.id).toEqual(expect.any(Number))
  })
})

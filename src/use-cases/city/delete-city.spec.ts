import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { CreateCityUseCase } from './create-city-use-case'
import { DeleteCityUseCase } from './delete-city-use-case'
import { FindByIdCityUseCase } from './find-by-id-use-case'

let citiesRepository: InMemororyCitiesRepository
let createCity: CreateCityUseCase
let findByIdCityUseCase: FindByIdCityUseCase
let sut: DeleteCityUseCase

describe('Delete City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    createCity = new CreateCityUseCase(citiesRepository)
    findByIdCityUseCase = new FindByIdCityUseCase(citiesRepository)
    sut = new DeleteCityUseCase(citiesRepository)
  })

  it('should be able delete city', async () => {
    const { city } = await createCity.execute({
      name: 'Belo Horizonte',
      stateId: 10,
    })

    await sut.execute({
      cityId: city.id,
    })

    await expect(() =>
      findByIdCityUseCase.execute({
        cityId: city.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

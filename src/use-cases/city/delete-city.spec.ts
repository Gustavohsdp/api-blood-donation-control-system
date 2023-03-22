import { InMemororyCitiesRepository } from '@/repositories/in-memory/in-memory-cities-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { CreateCityUseCase } from './create-city-use-case'
import { DeleteCityUseCase } from './delete-city-use-case'
import { FindByIdOrNameCityUseCase } from './find-by-id-or-name-use-case'

let citiesRepository: InMemororyCitiesRepository
let createCity: CreateCityUseCase
let findByIdOrNameCity: FindByIdOrNameCityUseCase
let sut: DeleteCityUseCase

describe('Delete City Use Case', () => {
  beforeEach(() => {
    citiesRepository = new InMemororyCitiesRepository()
    createCity = new CreateCityUseCase(citiesRepository)
    findByIdOrNameCity = new FindByIdOrNameCityUseCase(citiesRepository)
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
      findByIdOrNameCity.execute({
        cityId: city.id,
        name: city.name,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

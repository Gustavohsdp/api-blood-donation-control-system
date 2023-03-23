import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyUnitsRepository } from './../../repositories/in-memory/in-memory-units-repository'
import { CreateUnityUseCase } from './create-unity-use-case'
import { FindManyUnityUseCase } from './find-many-unity-use-case'

let unitsRepository: InMemororyUnitsRepository
let createUnity: CreateUnityUseCase
let sut: FindManyUnityUseCase

describe('Find Many Unity Use Case', () => {
  beforeEach(() => {
    unitsRepository = new InMemororyUnitsRepository()
    createUnity = new CreateUnityUseCase(unitsRepository)
    sut = new FindManyUnityUseCase(unitsRepository)
  })

  it('should be able find many units', async () => {
    await createUnity.execute({
      name: 'Unity Pampuplha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
    })

    await createUnity.execute({
      name: 'Unity Savassi',
      cityId: 1,
      complement: 'near the hotel',
      number: '939',
    })

    const { units } = await sut.execute()

    expect(units).toHaveLength(2)
    expect(units).toEqual([
      expect.objectContaining({
        name: 'Unity Pampuplha',
      }),
      expect.objectContaining({
        name: 'Unity Savassi',
      }),
    ])
  })
})

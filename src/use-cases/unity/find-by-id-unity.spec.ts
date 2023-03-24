import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyUnitsRepository } from './../../repositories/in-memory/in-memory-units-repository'
import { CreateUnityUseCase } from './create-unity-use-case'
import { FindByIdUnityUseCase } from './find-by-id-unity-use-case'

let unitsRepository: InMemororyUnitsRepository
let createUnity: CreateUnityUseCase
let sut: FindByIdUnityUseCase

describe('Find By Id Unity Use Case', () => {
  beforeEach(() => {
    unitsRepository = new InMemororyUnitsRepository()
    createUnity = new CreateUnityUseCase(unitsRepository)
    sut = new FindByIdUnityUseCase(unitsRepository)
  })

  it('should be able unity find by id', async () => {
    const { unity: created } = await createUnity.execute({
      name: 'Unity Pampuplha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
    })

    const { unity } = await sut.execute({
      unityId: created.id,
    })

    expect(unity.id).toEqual(expect.any(Number))
  })
})

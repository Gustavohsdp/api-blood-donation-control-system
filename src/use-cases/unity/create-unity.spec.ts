import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyUnitsRepository } from './../../repositories/in-memory/in-memory-units-repository'

import { CreateUnityUseCase } from './create-unity-use-case'

let unitsRepository: InMemororyUnitsRepository
let sut: CreateUnityUseCase

describe('Create Unity Use Case', () => {
  beforeEach(() => {
    unitsRepository = new InMemororyUnitsRepository()
    sut = new CreateUnityUseCase(unitsRepository)
  })

  it('should be able create unity', async () => {
    const { unity } = await sut.execute({
      name: 'Unity Pampuplha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
    })

    expect(unity.id).toEqual(expect.any(Number))
  })
})

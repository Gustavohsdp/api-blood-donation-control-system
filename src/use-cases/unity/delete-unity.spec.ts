import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyUnitsRepository } from './../../repositories/in-memory/in-memory-units-repository'
import { CreateUnityUseCase } from './create-unity-use-case'
import { DeleteUnityUseCase } from './delete-unity-use-case'
import { FindByIdUnityUseCase } from './find-by-id-unity-use-case'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let unitsRepository: InMemororyUnitsRepository
let createUnity: CreateUnityUseCase
let findByIdUnityUseCase: FindByIdUnityUseCase
let sut: DeleteUnityUseCase

describe('Delete Unity Use Case', () => {
  beforeEach(() => {
    unitsRepository = new InMemororyUnitsRepository()
    createUnity = new CreateUnityUseCase(unitsRepository)
    findByIdUnityUseCase = new FindByIdUnityUseCase(unitsRepository)
    sut = new DeleteUnityUseCase(unitsRepository)
  })

  it('should be able delete unity', async () => {
    const { unity } = await createUnity.execute({
      name: 'Unity Pampuplha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
    })

    await sut.execute({
      id: unity.id,
    })

    await expect(() =>
      findByIdUnityUseCase.execute({
        id: unity.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

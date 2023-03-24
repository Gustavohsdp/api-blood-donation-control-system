import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyUnitsRepository } from './../../repositories/in-memory/in-memory-units-repository'
import { CreateUnityUseCase } from './create-unity-use-case'
import { UpdateUnityUseCase } from './update-unity-use-case'

let unitsRepository: InMemororyUnitsRepository
let createUnity: CreateUnityUseCase
let sut: UpdateUnityUseCase

describe('Update Unity Use Case', () => {
  beforeEach(() => {
    unitsRepository = new InMemororyUnitsRepository()
    createUnity = new CreateUnityUseCase(unitsRepository)
    sut = new UpdateUnityUseCase(unitsRepository)
  })

  it('should be able update unity', async () => {
    const { unity: created } = await createUnity.execute({
      name: 'Unity Pampuplha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
    })

    const { unity } = await sut.execute({
      unityId: created.id,
      cityId: created.cityId,
      complement: created.complement,
      name: 'Unity center',
      number: '200',
    })

    expect(unity?.name).toEqual('Unity center')
    expect(unity?.number).toEqual('200')
  })
})

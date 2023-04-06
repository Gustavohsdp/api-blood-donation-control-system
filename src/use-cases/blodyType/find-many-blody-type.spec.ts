import { InMemororyBlodyTypeRepository } from '@/repositories/in-memory/in-memory-blody-type-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateBlodyTypeUseCase } from './create-blody-type-use-case'
import { FindManyBlodyTypeUseCase } from './find-many-blody-type-use-case'

let blodyTypeRepository: InMemororyBlodyTypeRepository
let createBlodyType: CreateBlodyTypeUseCase
let sut: FindManyBlodyTypeUseCase

describe('Find Many Blody Type Use Case', () => {
  beforeEach(() => {
    blodyTypeRepository = new InMemororyBlodyTypeRepository()
    createBlodyType = new CreateBlodyTypeUseCase(blodyTypeRepository)
    sut = new FindManyBlodyTypeUseCase(blodyTypeRepository)
  })

  it('should be able find many blody types', async () => {
    await createBlodyType.execute({
      factor: 'RH positivo',
      type: 'O+ - 36%',
    })

    await createBlodyType.execute({
      factor: 'RH negativo',
      type: 'O- - 36%',
    })

    const { blodyTypes } = await sut.execute()

    expect(blodyTypes).toHaveLength(2)
    expect(blodyTypes).toEqual([
      expect.objectContaining({
        factor: 'RH positivo',
      }),
      expect.objectContaining({
        factor: 'RH negativo',
      }),
    ])
  })
})

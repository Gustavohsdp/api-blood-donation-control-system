import { InMemororyBlodyTypeRepository } from '@/repositories/in-memory/in-memory-blody-type-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateBlodyTypeUseCase } from './create-blody-type-use-case'
import { FindByIdBlodyTypeUseCase } from './find-by-id-blody-type-use-case'

let blodyTypeRepository: InMemororyBlodyTypeRepository
let createBlodyType: CreateBlodyTypeUseCase
let sut: FindByIdBlodyTypeUseCase

describe('Find By Id Blody Type Use Case', () => {
  beforeEach(() => {
    blodyTypeRepository = new InMemororyBlodyTypeRepository()
    createBlodyType = new CreateBlodyTypeUseCase(blodyTypeRepository)
    sut = new FindByIdBlodyTypeUseCase(blodyTypeRepository)
  })

  it('should be able blody type find by id', async () => {
    const { blodyType: created } = await createBlodyType.execute({
      factor: 'RH positivo',
      type: 'O+ - 36%',
    })

    const { blodyType } = await sut.execute({
      blodyTypeId: created.id,
    })

    expect(blodyType.id).toEqual(expect.any(Number))
  })
})

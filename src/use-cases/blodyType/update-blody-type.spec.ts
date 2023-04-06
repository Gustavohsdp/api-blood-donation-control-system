import { InMemororyBlodyTypeRepository } from '@/repositories/in-memory/in-memory-blody-type-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateBlodyTypeUseCase } from './create-blody-type-use-case'
import { UpdateBlodyTypeUseCase } from './update-blody-type-use-case'

let blodyTypeRepository: InMemororyBlodyTypeRepository
let createBlodyType: CreateBlodyTypeUseCase
let sut: UpdateBlodyTypeUseCase

describe('Update Blody Types Use Case', () => {
  beforeEach(() => {
    blodyTypeRepository = new InMemororyBlodyTypeRepository()
    createBlodyType = new CreateBlodyTypeUseCase(blodyTypeRepository)
    sut = new UpdateBlodyTypeUseCase(blodyTypeRepository)
  })

  it('should be able update blody types ', async () => {
    const { blodyType: created } = await createBlodyType.execute({
      factor: 'RH positivo',
      type: 'O+ - 36%',
    })

    const { blodyType } = await sut.execute({
      blodyTypeId: created.id,
      factor: 'RH negativo',
      type: created.type,
    })

    expect(blodyType?.factor).toEqual('RH negativo')
  })
})

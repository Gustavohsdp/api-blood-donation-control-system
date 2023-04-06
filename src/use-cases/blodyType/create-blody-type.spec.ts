import { InMemororyBlodyTypeRepository } from '@/repositories/in-memory/in-memory-blody-type-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateBlodyTypeUseCase } from './create-blody-type-use-case'

let blodyTypeRepository: InMemororyBlodyTypeRepository
let sut: CreateBlodyTypeUseCase

describe('Create Blody Type Use Case', () => {
  beforeEach(() => {
    blodyTypeRepository = new InMemororyBlodyTypeRepository()
    sut = new CreateBlodyTypeUseCase(blodyTypeRepository)
  })

  it('should be able create blody type', async () => {
    const { blodyType } = await sut.execute({
      factor: 'RH positivo',
      type: 'O+ - 36%',
    })

    expect(blodyType.id).toEqual(expect.any(Number))
  })
})

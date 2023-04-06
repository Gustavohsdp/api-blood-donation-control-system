import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyBlodyTypeRepository } from '@/repositories/in-memory/in-memory-blody-type-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { CreateBlodyTypeUseCase } from './create-blody-type-use-case'
import { DeleteBlodyTypeUseCase } from './delete-blody-type-use-case'
import { FindByIdBlodyTypeUseCase } from './find-by-id-blody-type-use-case'

let blodyTypeRepository: InMemororyBlodyTypeRepository
let createBlodyType: CreateBlodyTypeUseCase
let findByIdBlodyTypeUseCase: FindByIdBlodyTypeUseCase
let sut: DeleteBlodyTypeUseCase

describe('Delete Blody Type Use Case', () => {
  beforeEach(() => {
    blodyTypeRepository = new InMemororyBlodyTypeRepository()
    createBlodyType = new CreateBlodyTypeUseCase(blodyTypeRepository)
    findByIdBlodyTypeUseCase = new FindByIdBlodyTypeUseCase(blodyTypeRepository)
    sut = new DeleteBlodyTypeUseCase(blodyTypeRepository)
  })

  it('should be able delete blody type', async () => {
    const { blodyType } = await createBlodyType.execute({
      factor: 'RH positivo',
      type: 'O+ - 36%',
    })

    await sut.execute({
      blodyTypeId: blodyType.id,
    })

    await expect(() =>
      findByIdBlodyTypeUseCase.execute({
        blodyTypeId: blodyType.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

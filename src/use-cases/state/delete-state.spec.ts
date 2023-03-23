import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyStatesRepository } from '@/repositories/in-memory/in-memory-states-repository'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { CreateStateUseCase } from './create-state-use-case'
import { DeleteStateUseCase } from './delete-state-use-case'
import { FindByIdStateUseCase } from './find-by-id-state-use-case'

let statesRepository: InMemororyStatesRepository
let createState: CreateStateUseCase
let findByIdStateUseCase: FindByIdStateUseCase
let sut: DeleteStateUseCase

describe('Delete State Use Case', () => {
  beforeEach(() => {
    statesRepository = new InMemororyStatesRepository()
    createState = new CreateStateUseCase(statesRepository)
    findByIdStateUseCase = new FindByIdStateUseCase(statesRepository)
    sut = new DeleteStateUseCase(statesRepository)
  })

  it('should be able delete city', async () => {
    const { state } = await createState.execute({
      name: 'Rio de Janeiro',
      abbreviation: 'RJ',
    })

    await sut.execute({
      id: state.id,
    })

    await expect(() =>
      findByIdStateUseCase.execute({
        id: state.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

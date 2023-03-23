import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyStatesRepository } from '@/repositories/in-memory/in-memory-states-repository'

import { CreateStateUseCase } from './create-state-use-case'
import { FindByIdStateUseCase } from './find-by-id-state-use-case'

let statesRepository: InMemororyStatesRepository
let createState: CreateStateUseCase
let sut: FindByIdStateUseCase

describe('Find By Id State Use Case', () => {
  beforeEach(() => {
    statesRepository = new InMemororyStatesRepository()
    createState = new CreateStateUseCase(statesRepository)
    sut = new FindByIdStateUseCase(statesRepository)
  })

  it('should be able state find by id', async () => {
    const { state: created } = await createState.execute({
      name: 'Rio de Janeiro',
      abbreviation: 'RJ',
    })

    const { state } = await sut.execute({
      id: created.id,
    })

    expect(state.id).toEqual(expect.any(Number))
  })
})

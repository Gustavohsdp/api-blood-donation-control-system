import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyStatesRepository } from '@/repositories/in-memory/in-memory-states-repository'

import { CreateStateUseCase } from './create-state-use-case'

let statesRepository: InMemororyStatesRepository
let sut: CreateStateUseCase

describe('Create State Use Case', () => {
  beforeEach(() => {
    statesRepository = new InMemororyStatesRepository()
    sut = new CreateStateUseCase(statesRepository)
  })

  it('should be able create state', async () => {
    const { state } = await sut.execute({
      name: 'Minas Gerais',
      abbreviation: 'MG',
    })

    expect(state.id).toEqual(expect.any(Number))
  })
})

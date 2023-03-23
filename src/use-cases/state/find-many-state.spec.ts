import { InMemororyStatesRepository } from '@/repositories/in-memory/in-memory-states-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateStateUseCase } from './create-state-use-case'
import { FindManyStateUseCase } from './find-many-state-use-case'

let statesRepository: InMemororyStatesRepository
let createState: CreateStateUseCase
let sut: FindManyStateUseCase

describe('Find Many State Use Case', () => {
  beforeEach(() => {
    statesRepository = new InMemororyStatesRepository()
    createState = new CreateStateUseCase(statesRepository)
    sut = new FindManyStateUseCase(statesRepository)
  })

  it('should be able find many cities', async () => {
    await createState.execute({
      name: 'São Paulo',
      abbreviation: 'SP',
    })

    await createState.execute({
      name: 'Rio de Janeiro',
      abbreviation: 'RJ',
    })

    const { states } = await sut.execute()

    expect(states).toHaveLength(2)
    expect(states).toEqual([
      expect.objectContaining({
        abbreviation: 'SP',
      }),
      expect.objectContaining({
        abbreviation: 'RJ',
      }),
    ])
  })
})

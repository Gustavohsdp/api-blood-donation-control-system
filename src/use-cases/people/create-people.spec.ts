import { InMemororyPeoplesRepository } from '@/repositories/in-memory/in-memory-peoples-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePeopleUseCase } from './create-people-use-case'

let peoplesRepository: InMemororyPeoplesRepository
let sut: CreatePeopleUseCase

describe('Create People Use Case', () => {
  beforeEach(() => {
    peoplesRepository = new InMemororyPeoplesRepository()
    sut = new CreatePeopleUseCase(peoplesRepository)
  })

  it('should be able create people', async () => {
    const { people } = await sut.execute({
      name: 'John Doe',
      street: 'John Doe Street',
      number: '02',
      complement: 'John Doe Complement',
      document: '14785200254',
      cityId: 1,
      blodyTypeId: 1,
    })

    expect(people.id).toEqual(expect.any(Number))
  })
})

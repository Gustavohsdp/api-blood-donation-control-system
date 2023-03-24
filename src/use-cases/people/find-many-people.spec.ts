import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyPeoplesRepository } from './../../repositories/in-memory/in-memory-peoples-repository'
import { CreatePeopleUseCase } from './create-people-use-case'
import { FindManyPeopleUseCase } from './find-many-people-use-case'

let peoplesRepository: InMemororyPeoplesRepository
let createPeople: CreatePeopleUseCase
let sut: FindManyPeopleUseCase

describe('Find Many People Use Case', () => {
  beforeEach(() => {
    peoplesRepository = new InMemororyPeoplesRepository()
    createPeople = new CreatePeopleUseCase(peoplesRepository)
    sut = new FindManyPeopleUseCase(peoplesRepository)
  })

  it('should be able find many peoples', async () => {
    await createPeople.execute({
      name: 'John Doe',
      street: 'John Doe Street',
      number: '02',
      complement: 'John Doe Complement',
      document: '14785200254',
      cityId: 1,
      blodyTypeId: 1,
    })

    await createPeople.execute({
      name: 'John Smith',
      street: 'John Smith Street',
      number: '01',
      complement: 'John Smith Complement',
      document: '14785200454',
      cityId: 1,
      blodyTypeId: 1,
    })

    const { peoples } = await sut.execute()

    expect(peoples).toHaveLength(2)
    expect(peoples).toEqual([
      expect.objectContaining({
        number: '02',
        document: '14785200254',
      }),
      expect.objectContaining({
        number: '01',
        document: '14785200454',
      }),
    ])
  })
})

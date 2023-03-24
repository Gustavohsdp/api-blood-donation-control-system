import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyPeoplesRepository } from './../../repositories/in-memory/in-memory-peoples-repository'
import { CreatePeopleUseCase } from './create-people-use-case'
import { FindByIdPeopleUseCase } from './find-by-id-people-use-case'

let peoplesRepository: InMemororyPeoplesRepository
let createPeople: CreatePeopleUseCase
let sut: FindByIdPeopleUseCase

describe('Find By Id Unity Use Case', () => {
  beforeEach(() => {
    peoplesRepository = new InMemororyPeoplesRepository()
    createPeople = new CreatePeopleUseCase(peoplesRepository)
    sut = new FindByIdPeopleUseCase(peoplesRepository)
  })

  it('should be able unity find by id', async () => {
    const { people: created } = await createPeople.execute({
      name: 'John Doe',
      street: 'John Doe Street',
      number: '02',
      complement: 'John Doe Complement',
      document: '14785200254',
      cityId: 1,
      blodyTypeId: 1,
    })

    const { people } = await sut.execute({
      peopleId: created.id,
    })

    expect(people.id).toEqual(expect.any(Number))
  })
})

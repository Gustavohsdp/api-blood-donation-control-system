import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyPeoplesRepository } from './../../repositories/in-memory/in-memory-peoples-repository'
import { CreatePeopleUseCase } from './create-people-use-case'
import { UpdatePeopleUseCase } from './update-people-use-case'

let peoplesRepository: InMemororyPeoplesRepository
let createPeople: CreatePeopleUseCase
let sut: UpdatePeopleUseCase

describe('Update People Use Case', () => {
  beforeEach(() => {
    peoplesRepository = new InMemororyPeoplesRepository()
    createPeople = new CreatePeopleUseCase(peoplesRepository)
    sut = new UpdatePeopleUseCase(peoplesRepository)
  })

  it('should be able update people', async () => {
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
      blodyTypeId: created.blodyTypeId,
      cityId: created.cityId,
      complement: created.complement,
      document: '14785200300',
      name: created.name,
      number: created.number,
      peopleId: created.id,
      street: created.street,
    })

    expect(people?.document).toEqual('14785200300')
  })
})

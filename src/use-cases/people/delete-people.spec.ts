import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyPeoplesRepository } from './../../repositories/in-memory/in-memory-peoples-repository'
import { CreatePeopleUseCase } from './create-people-use-case'
import { DeletePeopleUseCase } from './delete-people-use-case'
import { FindByIdPeopleUseCase } from './find-by-id-people-use-case'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let peoplesRepository: InMemororyPeoplesRepository
let createPeople: CreatePeopleUseCase
let findByIdPeopleUseCase: FindByIdPeopleUseCase
let sut: DeletePeopleUseCase

describe('Delete People Use Case', () => {
  beforeEach(() => {
    peoplesRepository = new InMemororyPeoplesRepository()
    createPeople = new CreatePeopleUseCase(peoplesRepository)
    findByIdPeopleUseCase = new FindByIdPeopleUseCase(peoplesRepository)
    sut = new DeletePeopleUseCase(peoplesRepository)
  })

  it('should be able delete people', async () => {
    const { people } = await createPeople.execute({
      name: 'John Doe',
      street: 'John Doe Street',
      number: '02',
      complement: 'John Doe Complement',
      document: '14785200254',
      cityId: 1,
      blodyTypeId: 1,
    })

    await sut.execute({
      peopleId: people.id,
    })

    await expect(() =>
      findByIdPeopleUseCase.execute({
        peopleId: people.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

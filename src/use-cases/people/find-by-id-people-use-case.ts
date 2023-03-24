import { PeoplesRepository } from './../../repositories/peoples-repository'

import { People } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdPeopleUseCaseRequest {
  peopleId: number
}

interface FindByIdPeopleUseCaseResponse {
  people: People
}

export class FindByIdPeopleUseCase {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute({
    peopleId,
  }: FindByIdPeopleUseCaseRequest): Promise<FindByIdPeopleUseCaseResponse> {
    const people = await this.peoplesRepository.findById(peopleId)

    if (!people) {
      throw new ResourceNotFoundError()
    }

    return { people }
  }
}

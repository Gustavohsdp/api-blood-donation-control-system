import { PeoplesRepository } from './../../repositories/peoples-repository'

import { People } from '@prisma/client'

interface FindManyPeopleUseCaseResponse {
  peoples: People[]
}

export class FindManyPeopleUseCase {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute(): Promise<FindManyPeopleUseCaseResponse> {
    const peoples = await this.peoplesRepository.findMany()

    return { peoples }
  }
}

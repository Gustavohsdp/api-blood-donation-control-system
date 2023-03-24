import { PeoplesRepository } from './../../repositories/peoples-repository'

import { People } from '@prisma/client'

interface CreatePeopleUseCaseRequest {
  name: string
  street: string
  number: string
  complement: string
  document: string
  cityId: number
  blodyTypeId: number
}

interface CreatePeopleUseCaseResponse {
  people: People
}

export class CreatePeopleUseCase {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute({
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    number,
    street,
  }: CreatePeopleUseCaseRequest): Promise<CreatePeopleUseCaseResponse> {
    const people = await this.peoplesRepository.create({
      blodyTypeId,
      cityId,
      complement,
      document,
      name,
      number,
      street,
    })

    return { people }
  }
}

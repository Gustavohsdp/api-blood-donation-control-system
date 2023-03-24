import { People } from '@prisma/client'
import { PeoplesRepository } from './../../repositories/peoples-repository'

interface UpdatePeopleUseCaseRequest {
  peopleId: number

  name: string
  street: string
  number: string
  complement: string
  document: string
  cityId: number
  blodyTypeId: number
}

interface UpdatePeopleUseCaseResponse {
  people: People | undefined
}

export class UpdatePeopleUseCase {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute({
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    number,
    peopleId,
    street,
  }: UpdatePeopleUseCaseRequest): Promise<UpdatePeopleUseCaseResponse> {
    const people = await this.peoplesRepository.update({
      blodyTypeId,
      cityId,
      complement,
      document,
      id: peopleId,
      name,
      number,
      street,
    })

    return { people }
  }
}

import { State } from '@prisma/client'
import { StatesRepository } from '../repositories/states-repository'

interface CreateStateUseCaseRequest {
  name: string
  abbreviation: string
}

interface CreateStateUseCaseResponse {
  state: State
}

export class CreateStateUseCase {
  constructor(private stateRepository: StatesRepository) { }

  async execute({
    name,
    abbreviation,
  }: CreateStateUseCaseRequest): Promise<CreateStateUseCaseResponse> {
    const state = await this.stateRepository.create({
      name,
      abbreviation,
    })

    return { state }
  }
}

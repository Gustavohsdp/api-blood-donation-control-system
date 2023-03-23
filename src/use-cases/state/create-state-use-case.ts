import { StatesRepository } from '@/repositories/states-repository'
import { State } from '@prisma/client'

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

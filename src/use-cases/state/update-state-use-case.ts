import { StatesRepository } from '@/repositories/states-repository'
import { State } from '@prisma/client'

interface UpdateStateUseCaseRequest {
  id: number
  name: string
  abbreviation: string
}

interface UpdateStateUseCaseResponse {
  state: State
}

export class UpdateStateUseCase {
  constructor(private statesRepository: StatesRepository) { }

  async execute({
    name,
    abbreviation,
    id,
  }: UpdateStateUseCaseRequest): Promise<UpdateStateUseCaseResponse> {
    const state = await this.statesRepository.update({
      id,
      name,
      abbreviation,
    })

    return { state }
  }
}

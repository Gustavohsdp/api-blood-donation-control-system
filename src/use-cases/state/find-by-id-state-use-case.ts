import { StatesRepository } from '@/repositories/states-repository'
import { State } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdStateUseCaseRequest {
  id: number
}

interface FindByIdStateUseCaseResponse {
  state: State
}

export class FindByIdStateUseCase {
  constructor(private statesRepository: StatesRepository) { }

  async execute({
    id,
  }: FindByIdStateUseCaseRequest): Promise<FindByIdStateUseCaseResponse> {
    const state = await this.statesRepository.findById(id)

    if (!state) {
      throw new ResourceNotFoundError()
    }

    return { state }
  }
}

import { StatesRepository } from '@/repositories/states-repository'

interface DeleteStateUseCaseRequest {
  id: number
}

export class DeleteStateUseCase {
  constructor(private statesRepository: StatesRepository) { }

  async execute({ id }: DeleteStateUseCaseRequest): Promise<void> {
    await this.statesRepository.delete(id)
  }
}

import { PeoplesRepository } from '@/repositories/peoples-repository'

interface DeletePeopleUseCaseRequest {
  peopleId: number
}

export class DeletePeopleUseCase {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute({ peopleId }: DeletePeopleUseCaseRequest): Promise<void> {
    await this.peoplesRepository.delete(peopleId)
  }
}

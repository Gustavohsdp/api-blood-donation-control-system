import { BlodyTypesRepository } from '@/repositories/blody-type-repository'

interface DeleteBlodyTypeUseCaseRequest {
  blodyTypeId: number
}

export class DeleteBlodyTypeUseCase {
  constructor(private blodyTypesRepository: BlodyTypesRepository) {}

  async execute({ blodyTypeId }: DeleteBlodyTypeUseCaseRequest): Promise<void> {
    await this.blodyTypesRepository.delete(blodyTypeId)
  }
}

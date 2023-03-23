import { UnitsRepository } from '@/repositories/units-repository'

interface DeleteUnityUseCaseRequest {
  id: number
}

export class DeleteUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({ id }: DeleteUnityUseCaseRequest): Promise<void> {
    await this.unitsRepository.delete(id)
  }
}

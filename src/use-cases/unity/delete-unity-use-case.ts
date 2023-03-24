import { UnitsRepository } from '@/repositories/units-repository'

interface DeleteUnityUseCaseRequest {
  unityId: number
}

export class DeleteUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({ unityId }: DeleteUnityUseCaseRequest): Promise<void> {
    await this.unitsRepository.delete(unityId)
  }
}

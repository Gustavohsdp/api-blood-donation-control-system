import { UnitsRepository } from '@/repositories/units-repository'
import { Unity } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdUnityUseCaseRequest {
  unityId: number
}

interface FindByIdUnityUseCaseResponse {
  unity: Unity
}

export class FindByIdUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({
    unityId,
  }: FindByIdUnityUseCaseRequest): Promise<FindByIdUnityUseCaseResponse> {
    const unity = await this.unitsRepository.findById(unityId)

    if (!unity) {
      throw new ResourceNotFoundError()
    }

    return { unity }
  }
}

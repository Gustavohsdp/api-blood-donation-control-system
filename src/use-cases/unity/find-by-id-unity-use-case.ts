import { UnitsRepository } from '@/repositories/units-repository'
import { Unity } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdUnityUseCaseRequest {
  id: number
}

interface FindByIdUnityUseCaseResponse {
  unity: Unity
}

export class FindByIdUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({
    id,
  }: FindByIdUnityUseCaseRequest): Promise<FindByIdUnityUseCaseResponse> {
    const unity = await this.unitsRepository.findById(id)

    if (!unity) {
      throw new ResourceNotFoundError()
    }

    return { unity }
  }
}

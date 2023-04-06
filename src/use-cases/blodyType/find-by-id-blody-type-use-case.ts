import { BlodyTypesRepository } from '@/repositories/blody-type-repository'
import { BlodyType } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdBlodyTypeUseCaseRequest {
  blodyTypeId: number
}

interface FindByIdBlodyTypeUseCaseResponse {
  blodyType: BlodyType
}

export class FindByIdBlodyTypeUseCase {
  constructor(private blodyTypesRepository: BlodyTypesRepository) {}

  async execute({
    blodyTypeId,
  }: FindByIdBlodyTypeUseCaseRequest): Promise<FindByIdBlodyTypeUseCaseResponse> {
    const blodyType = await this.blodyTypesRepository.findById(blodyTypeId)

    if (!blodyType) {
      throw new ResourceNotFoundError()
    }

    return { blodyType }
  }
}

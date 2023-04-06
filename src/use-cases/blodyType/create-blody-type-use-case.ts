import { BlodyTypesRepository } from '@/repositories/blody-type-repository'
import { BlodyType } from '@prisma/client'

interface CreateBlodyTypeUseCaseRequest {
  type: string
  factor: string
}

interface CreateBlodyTypeUseCaseResponse {
  blodyType: BlodyType
}

export class CreateBlodyTypeUseCase {
  constructor(private blodyTypesRepository: BlodyTypesRepository) {}

  async execute({
    factor,
    type,
  }: CreateBlodyTypeUseCaseRequest): Promise<CreateBlodyTypeUseCaseResponse> {
    const blodyType = await this.blodyTypesRepository.create({
      factor,
      type,
    })

    return { blodyType }
  }
}

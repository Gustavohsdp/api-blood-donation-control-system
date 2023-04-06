import { BlodyTypesRepository } from '@/repositories/blody-type-repository'
import { BlodyType } from '@prisma/client'

interface UpdateBlodyTypeUseCaseRequest {
  blodyTypeId: number

  type: string
  factor: string
}

interface UpdateBlodyTypeUseCaseResponse {
  blodyType: BlodyType | undefined
}

export class UpdateBlodyTypeUseCase {
  constructor(private blodyTypesRepository: BlodyTypesRepository) {}

  async execute({
    blodyTypeId,
    factor,
    type,
  }: UpdateBlodyTypeUseCaseRequest): Promise<UpdateBlodyTypeUseCaseResponse> {
    const blodyType = await this.blodyTypesRepository.update({
      factor,
      type,
      id: blodyTypeId,
    })

    return { blodyType }
  }
}

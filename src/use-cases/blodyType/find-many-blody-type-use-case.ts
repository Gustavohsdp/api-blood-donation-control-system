import { BlodyTypesRepository } from '@/repositories/blody-type-repository'
import { BlodyType } from '@prisma/client'

interface FindManyBlodyTypeUseCaseResponse {
  blodyTypes: BlodyType[]
}

export class FindManyBlodyTypeUseCase {
  constructor(private blodyTypesRepository: BlodyTypesRepository) {}

  async execute(): Promise<FindManyBlodyTypeUseCaseResponse> {
    const blodyTypes = await this.blodyTypesRepository.findMany()

    return { blodyTypes }
  }
}

import { UnitsRepository } from '@/repositories/units-repository'
import { Unity } from '@prisma/client'

interface FindManyUnityUseCaseResponse {
  units: Unity[]
}

export class FindManyUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute(): Promise<FindManyUnityUseCaseResponse> {
    const units = await this.unitsRepository.findMany()

    return { units }
  }
}

import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { Distribution } from '@prisma/client'

interface FindManyDistributionUseCaseResponse {
  distributions: Distribution[]
}

export class FindManyDistributionUseCase {
  constructor(private distributionsRepository: PrismaDistributionsRepository) {}

  async execute(): Promise<FindManyDistributionUseCaseResponse> {
    const distributions = await this.distributionsRepository.findMany()

    return { distributions }
  }
}

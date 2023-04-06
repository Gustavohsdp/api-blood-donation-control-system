import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { Distribution } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdDistributionUseCaseRequest {
  distributionId: number
}

interface FindByIdDistributionUseCaseResponse {
  distribution: Distribution
}

export class FindByIdDistributionUseCase {
  constructor(private distributionsRepository: PrismaDistributionsRepository) {}

  async execute({
    distributionId,
  }: FindByIdDistributionUseCaseRequest): Promise<FindByIdDistributionUseCaseResponse> {
    const distribution = await this.distributionsRepository.findById(
      distributionId,
    )

    if (!distribution) {
      throw new ResourceNotFoundError()
    }

    return { distribution }
  }
}

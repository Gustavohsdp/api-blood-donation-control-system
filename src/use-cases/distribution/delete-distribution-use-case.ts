import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'

interface DeleteDistributionUseCaseRequest {
  distributionId: number
}

export class DeleteDistributionUseCase {
  constructor(private distributionsRepository: PrismaDistributionsRepository) {}

  async execute({
    distributionId,
  }: DeleteDistributionUseCaseRequest): Promise<void> {
    await this.distributionsRepository.delete(distributionId)
  }
}

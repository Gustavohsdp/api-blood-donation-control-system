import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { Distribution } from '@prisma/client'

interface CreateDistributionUseCaseRequest {
  date: Date
  productId: number
  unityId: number
}

interface CreateDistributionUseCaseResponse {
  distribution: Distribution
}

export class CreateDistributionUseCase {
  constructor(private distributionsRepository: PrismaDistributionsRepository) {}

  async execute({
    date,
    productId,
    unityId,
  }: CreateDistributionUseCaseRequest): Promise<CreateDistributionUseCaseResponse> {
    const distribution = await this.distributionsRepository.create({
      date,
      productId,
      unityId,
    })

    return { distribution }
  }
}

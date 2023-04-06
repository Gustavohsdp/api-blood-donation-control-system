import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { Distribution } from '@prisma/client'

interface UpdateDistributionUseCaseRequest {
  distributionId: number

  date: Date
  productId: number
  unityId: number
}

interface UpdateDistributionUseCaseResponse {
  distribution: Distribution | undefined
}

export class UpdateDistributionUseCase {
  constructor(private distributionsRepository: PrismaDistributionsRepository) {}

  async execute({
    date,
    distributionId,
    productId,
    unityId,
  }: UpdateDistributionUseCaseRequest): Promise<UpdateDistributionUseCaseResponse> {
    const distribution = await this.distributionsRepository.update({
      date,
      id: distributionId,
      productId,
      unityId,
    })

    return { distribution }
  }
}

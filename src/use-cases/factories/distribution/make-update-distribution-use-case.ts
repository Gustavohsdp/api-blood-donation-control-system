import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { UpdateDistributionUseCase } from '@/use-cases/distribution/update-distribution-use-case'

export function makeUpdateDistributionUseCase() {
  const prismaDistributionsRepository = new PrismaDistributionsRepository()

  const useCase = new UpdateDistributionUseCase(prismaDistributionsRepository)

  return useCase
}

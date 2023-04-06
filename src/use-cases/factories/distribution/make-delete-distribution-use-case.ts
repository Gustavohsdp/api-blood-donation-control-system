import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { DeleteDistributionUseCase } from '@/use-cases/distribution/delete-distribution-use-case'

export function makeDeleteDistributionUseCase() {
  const prismaDistributionsRepository = new PrismaDistributionsRepository()

  const useCase = new DeleteDistributionUseCase(prismaDistributionsRepository)

  return useCase
}

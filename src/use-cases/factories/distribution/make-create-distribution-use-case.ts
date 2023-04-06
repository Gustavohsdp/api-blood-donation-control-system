import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { CreateDistributionUseCase } from '@/use-cases/distribution/create-distribution-use-case'

export function makeCreateDistributionUseCase() {
  const prismaDistributionsRepository = new PrismaDistributionsRepository()

  const useCase = new CreateDistributionUseCase(prismaDistributionsRepository)

  return useCase
}

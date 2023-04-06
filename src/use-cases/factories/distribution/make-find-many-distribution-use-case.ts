import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { FindManyDistributionUseCase } from '@/use-cases/distribution/find-many-distribution-use-case'

export function makeFindManyDistributionUseCase() {
  const prismaDistributionsRepository = new PrismaDistributionsRepository()

  const useCase = new FindManyDistributionUseCase(prismaDistributionsRepository)

  return useCase
}

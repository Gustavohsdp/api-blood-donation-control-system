import { PrismaDistributionsRepository } from '@/repositories/prisma/prisma-distributions-repository'
import { FindByIdDistributionUseCase } from '@/use-cases/distribution/find-by-id-distribution-use-case'

export function makeFindByIdDistributionUseCase() {
  const prismaDistributionsRepository = new PrismaDistributionsRepository()

  const useCase = new FindByIdDistributionUseCase(prismaDistributionsRepository)

  return useCase
}

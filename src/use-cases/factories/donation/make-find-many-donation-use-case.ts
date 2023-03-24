import { PrismaDonationsRepository } from '@/repositories/prisma/prisma-donations-repository'
import { FindManyDonationUseCase } from '@/use-cases/donation/find-many-donation-use-case'

export function makeFindManyDonationUseCase() {
  const prismaDonationsRepository = new PrismaDonationsRepository()

  const useCase = new FindManyDonationUseCase(prismaDonationsRepository)

  return useCase
}

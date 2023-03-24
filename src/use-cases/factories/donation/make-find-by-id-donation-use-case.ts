import { PrismaDonationsRepository } from '@/repositories/prisma/prisma-donations-repository'
import { FindByIdDonationUseCase } from '@/use-cases/donation/find-by-id-donation-use-case'

export function makeFindByIdDonationUseCase() {
  const prismaDonationsRepository = new PrismaDonationsRepository()

  const useCase = new FindByIdDonationUseCase(prismaDonationsRepository)

  return useCase
}

import { PrismaDonationsRepository } from '@/repositories/prisma/prisma-donations-repository'
import { DeleteDonationUseCase } from '@/use-cases/donation/delete-donation-use-case'

export function makeDeleteDonationUseCase() {
  const prismaDonationsRepository = new PrismaDonationsRepository()

  const useCase = new DeleteDonationUseCase(prismaDonationsRepository)

  return useCase
}

import { PrismaDonationsRepository } from '@/repositories/prisma/prisma-donations-repository'
import { CreateDonationUseCase } from '@/use-cases/donation/create-donation-use-case'

export function makeCreateDonationUseCase() {
  const prismaDonationsRepository = new PrismaDonationsRepository()

  const useCase = new CreateDonationUseCase(prismaDonationsRepository)

  return useCase
}

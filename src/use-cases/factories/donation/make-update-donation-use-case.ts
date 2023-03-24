import { PrismaDonationsRepository } from './../../../repositories/prisma/prisma-donations-repository'
import { UpdateDonationUseCase } from './../../donation/update-donation-use-case'

export function makeUpdateDonationUseCase() {
  const prismaDonationsRepository = new PrismaDonationsRepository()

  const useCase = new UpdateDonationUseCase(prismaDonationsRepository)

  return useCase
}

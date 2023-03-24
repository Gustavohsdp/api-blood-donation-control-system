import { DonationsRepository } from '@/repositories/donations-repository'
import { Donation } from '@prisma/client'

interface FindManyDonationUseCaseResponse {
  donations: Donation[]
}

export class FindManyDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute(): Promise<FindManyDonationUseCaseResponse> {
    const donations = await this.donationsRepository.findMany()

    return { donations }
  }
}

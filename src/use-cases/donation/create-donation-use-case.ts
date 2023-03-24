import { DonationsRepository } from '@/repositories/donations-repository'
import { Donation } from '@prisma/client'

interface CreateDonationUseCaseRequest {
  date: Date
  collectionSiteId: number
  peopleId: number
}

interface CreateDonationUseCaseResponse {
  donation: Donation
}

export class CreateDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({
    collectionSiteId,
    date,
    peopleId,
  }: CreateDonationUseCaseRequest): Promise<CreateDonationUseCaseResponse> {
    const donation = await this.donationsRepository.create({
      collectionSiteId,
      date,
      peopleId,
    })

    return { donation }
  }
}

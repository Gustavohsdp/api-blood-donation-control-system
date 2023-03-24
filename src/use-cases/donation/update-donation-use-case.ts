import { DonationsRepository } from '@/repositories/donations-repository'
import { Donation } from '@prisma/client'

interface UpdateDonationUseCaseRequest {
  donationId: number

  date: Date
  collectionSiteId: number
  peopleId: number
}

interface UpdateDonationUseCaseResponse {
  donation: Donation | undefined
}

export class UpdateDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({
    collectionSiteId,
    date,
    donationId,
    peopleId,
  }: UpdateDonationUseCaseRequest): Promise<UpdateDonationUseCaseResponse> {
    const donation = await this.donationsRepository.update({
      collectionSiteId,
      date,
      id: donationId,
      peopleId,
    })

    return { donation }
  }
}

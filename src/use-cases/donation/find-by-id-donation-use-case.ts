import { DonationsRepository } from '@/repositories/donations-repository'
import { Donation } from '@prisma/client'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdDonationUseCaseRequest {
  donationId: number
}

interface FindByIdDonationUseCaseResponse {
  donation: Donation
}

export class FindByIdDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({
    donationId,
  }: FindByIdDonationUseCaseRequest): Promise<FindByIdDonationUseCaseResponse> {
    const donation = await this.donationsRepository.findById(donationId)

    if (!donation) {
      throw new ResourceNotFoundError()
    }

    return { donation }
  }
}

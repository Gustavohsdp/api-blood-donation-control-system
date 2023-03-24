import { DonationsRepository } from '@/repositories/donations-repository'

interface DeleteDonationUseCaseRequest {
  donationId: number
}

export class DeleteDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({ donationId }: DeleteDonationUseCaseRequest): Promise<void> {
    await this.donationsRepository.delete(donationId)
  }
}

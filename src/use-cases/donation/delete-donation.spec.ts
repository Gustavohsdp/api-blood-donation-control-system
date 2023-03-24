import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyDonationsRepository } from './../../repositories/in-memory/in-memory-donations-repository'
import { CreateDonationUseCase } from './create-donation-use-case'
import { DeleteDonationUseCase } from './delete-donation-use-case'
import { FindByIdDonationUseCase } from './find-by-id-donation-use-case'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let donationsRepository: InMemororyDonationsRepository
let createDonation: CreateDonationUseCase
let findByIdDonationUseCase: FindByIdDonationUseCase
let sut: DeleteDonationUseCase

describe('Delete Unity Use Case', () => {
  beforeEach(() => {
    donationsRepository = new InMemororyDonationsRepository()
    createDonation = new CreateDonationUseCase(donationsRepository)
    findByIdDonationUseCase = new FindByIdDonationUseCase(donationsRepository)
    sut = new DeleteDonationUseCase(donationsRepository)
  })

  it('should be able delete unity', async () => {
    const { donation } = await createDonation.execute({
      collectionSiteId: 1,
      peopleId: 1,
      date: new Date(),
    })

    await sut.execute({
      donationId: donation.id,
    })

    await expect(() =>
      findByIdDonationUseCase.execute({
        donationId: donation.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})

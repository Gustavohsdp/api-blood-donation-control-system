import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyDonationsRepository } from './../../repositories/in-memory/in-memory-donations-repository'
import { CreateDonationUseCase } from './create-donation-use-case'
import { UpdateDonationUseCase } from './update-donation-use-case'

let donationsRepository: InMemororyDonationsRepository
let createDonation: CreateDonationUseCase
let sut: UpdateDonationUseCase

describe('Update Donation Use Case', () => {
  beforeEach(() => {
    donationsRepository = new InMemororyDonationsRepository()
    createDonation = new CreateDonationUseCase(donationsRepository)
    sut = new UpdateDonationUseCase(donationsRepository)
  })

  it('should be able update donation', async () => {
    const { donation: created } = await createDonation.execute({
      collectionSiteId: 1,
      peopleId: 1,
      date: new Date(),
    })

    const { donation } = await sut.execute({
      collectionSiteId: 1,
      peopleId: 2,
      date: new Date(),
      donationId: created.id,
    })

    expect(donation?.collectionSiteId).toEqual(1)
  })
})

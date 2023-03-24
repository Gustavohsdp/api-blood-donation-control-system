import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyDonationsRepository } from './../../repositories/in-memory/in-memory-donations-repository'
import { CreateDonationUseCase } from './create-donation-use-case'
import { FindByIdDonationUseCase } from './find-by-id-donation-use-case'

let donationsRepository: InMemororyDonationsRepository
let createDonation: CreateDonationUseCase
let sut: FindByIdDonationUseCase

describe('Find By Id Unity Use Case', () => {
  beforeEach(() => {
    donationsRepository = new InMemororyDonationsRepository()
    createDonation = new CreateDonationUseCase(donationsRepository)
    sut = new FindByIdDonationUseCase(donationsRepository)
  })

  it('should be able unity find by id', async () => {
    const { donation: created } = await createDonation.execute({
      collectionSiteId: 1,
      peopleId: 1,
      date: new Date(),
    })

    const { donation } = await sut.execute({
      donationId: created.id,
    })

    expect(donation.id).toEqual(expect.any(Number))
  })
})

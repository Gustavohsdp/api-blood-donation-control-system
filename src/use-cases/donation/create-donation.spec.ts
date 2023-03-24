import { InMemororyDonationsRepository } from '@/repositories/in-memory/in-memory-donations-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateDonationUseCase } from './create-donation-use-case'

let donationsRepository: InMemororyDonationsRepository
let sut: CreateDonationUseCase

describe('Create Donation Use Case', () => {
  beforeEach(() => {
    donationsRepository = new InMemororyDonationsRepository()
    sut = new CreateDonationUseCase(donationsRepository)
  })

  it('should be able create donation', async () => {
    const { donation } = await sut.execute({
      collectionSiteId: 1,
      peopleId: 1,
      date: new Date(),
    })

    expect(donation.id).toEqual(expect.any(Number))
  })
})

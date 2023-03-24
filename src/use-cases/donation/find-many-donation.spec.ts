import { beforeEach, describe, expect, it } from 'vitest'
import { InMemororyDonationsRepository } from './../../repositories/in-memory/in-memory-donations-repository'
import { CreateDonationUseCase } from './create-donation-use-case'
import { FindManyDonationUseCase } from './find-many-donation-use-case'

let donationsRepository: InMemororyDonationsRepository
let createDonation: CreateDonationUseCase
let sut: FindManyDonationUseCase

describe('Find Many Donation Use Case', () => {
  beforeEach(() => {
    donationsRepository = new InMemororyDonationsRepository()
    createDonation = new CreateDonationUseCase(donationsRepository)
    sut = new FindManyDonationUseCase(donationsRepository)
  })

  it('should be able find many donations', async () => {
    await createDonation.execute({
      collectionSiteId: 1,
      peopleId: 1,
      date: new Date(),
    })

    await createDonation.execute({
      collectionSiteId: 2,
      peopleId: 2,
      date: new Date(),
    })

    const { donations } = await sut.execute()

    expect(donations).toHaveLength(2)
    expect(donations).toEqual([
      expect.objectContaining({
        peopleId: 1,
      }),
      expect.objectContaining({
        peopleId: 2,
      }),
    ])
  })
})

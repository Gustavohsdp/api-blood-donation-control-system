import { randomInt } from 'node:crypto'

import { Donation } from '@prisma/client'

import {
  CreateProps,
  DonationsRepository,
  UpdateProps
} from '../donations-repository'

export class InMemororyDonationsRepository implements DonationsRepository {
  public items: Donation[] = []

  async create(data: CreateProps) {
    const { collectionSiteId, peopleId, date } = data

    const donation = {
      id: randomInt(1000),
      collectionSiteId,
      peopleId,
      date,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(donation)

    return donation
  }

  async update({ id, collectionSiteId, peopleId, date }: UpdateProps) {
    const donationIndex = this.items.findIndex((item) => item.id === id)

    if (donationIndex >= 0) {
      this.items[donationIndex] = {
        id,
        collectionSiteId,
        peopleId,
        date,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const donation = this.items.find((item) => item.id === id)

      return donation
    }
  }

  async delete(id: number) {
    const donationIndex = this.items.findIndex((item) => item.id === id)

    if (donationIndex >= 0) {
      this.items.splice(donationIndex, 1)
    }
  }

  async findById(id: number) {
    const donation = this.items.find((item) => item.id === id)

    if (!donation) {
      return null
    }

    return donation
  }

  async findMany() {
    return this.items
  }
}

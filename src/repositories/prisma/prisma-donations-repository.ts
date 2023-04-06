import { prisma } from '../../lib/prisma'
import {
  CreateProps,
  DonationsRepository,
  UpdateProps,
} from '../donations-repository'

export class PrismaDonationsRepository implements DonationsRepository {
  async create(data: CreateProps) {
    const { collectionSiteId, peopleId, date } = data

    const donation = await prisma.donation.create({
      data: {
        date: new Date(date),
        collectionSite: { connect: { id: collectionSiteId } },
        people: { connect: { id: peopleId } },
      },
    })

    return donation
  }

  async update({ collectionSiteId, date, id, peopleId }: UpdateProps) {
    const donation = await prisma.donation.update({
      where: {
        id,
      },
      data: {
        date: new Date(date),
        collectionSite: { connect: { id: collectionSiteId } },
        people: { connect: { id: peopleId } },
      },
    })

    return donation
  }

  async delete(id: number) {
    await prisma.donation.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const donation = await prisma.donation.findUnique({
      where: {
        id,
      },
    })

    return donation
  }

  async findMany() {
    const donations = await prisma.donation.findMany({
      include: {
        products: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return donations
  }
}

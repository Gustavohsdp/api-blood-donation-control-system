import { prisma } from '@/lib/prisma'
import {
  CollectionSitesRepository,
  CreateProps,
  UpdateProps
} from '@/repositories/collection-sites-repository'
import { CollectionSite } from '@prisma/client'
export class PrismaCollectionSitesRepository
  implements CollectionSitesRepository {
  async create(data: CreateProps) {
    const { cityId, complement, name, number, street } = data

    const collectionSite = await prisma.collectionSite.create({
      data: {
        city: { connect: { id: cityId } },
        complement,
        name,
        number,
        street,
      },
    })

    return collectionSite
  }

  async update({
    name,
    cityId,
    collectionSiteId,
    complement,
    number,
    street,
  }: UpdateProps): Promise<CollectionSite | undefined> {
    const collectionSite = await prisma.collectionSite.update({
      where: {
        id: collectionSiteId,
      },
      data: {
        city: { connect: { id: cityId } },
        complement,
        name,
        number,
        street,
      },
    })

    return collectionSite
  }

  async delete(id: number): Promise<void> {
    await prisma.collectionSite.delete({ where: { id } })
  }

  async findById(id: number): Promise<CollectionSite | null> {
    const collectionSite = await prisma.collectionSite.findUnique({
      where: {
        id,
      },
    })

    return collectionSite
  }

  async findMany(): Promise<CollectionSite[]> {
    const collectionSites = await prisma.collectionSite.findMany({
      include: {
        donations: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return collectionSites
  }
}

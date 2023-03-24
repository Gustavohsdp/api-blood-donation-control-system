import { randomInt } from 'node:crypto'

import { CollectionSite } from '@prisma/client'

import {
  CollectionSitesRepository,
  CreateProps,
  UpdateProps
} from '../collection-sites-repository'

export class InMemoryCollectionSites implements CollectionSitesRepository {
  public items: CollectionSite[] = []

  async create(data: CreateProps) {
    const { cityId, complement, name, number, street } = data

    const collectionSite = {
      id: randomInt(1000),
      name,
      street,
      number,
      complement,
      cityId,

      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(collectionSite)

    return collectionSite
  }

  async update({
    name,
    cityId,
    collectionSiteId,
    complement,
    number,
    street,
  }: UpdateProps) {
    const collectionSiteIndex = this.items.findIndex(
      (item) => item.id === collectionSiteId,
    )

    if (collectionSiteIndex >= 0) {
      this.items[collectionSiteIndex] = {
        id: collectionSiteId,
        name,
        street,
        number,
        complement,
        cityId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }

    const collectionSite = this.items.find(
      (item) => item.id === collectionSiteId,
    )

    return collectionSite
  }

  async delete(id: number): Promise<void> {
    const collectionSiteIndex = this.items.findIndex((item) => item.id === id)

    if (collectionSiteIndex >= 0) {
      this.items.splice(collectionSiteIndex, 1)
    }
  }

  async findById(id: number) {
    const collectionSite = this.items.find((item) => item.id === id)

    if (!collectionSite) {
      return null
    }

    return collectionSite
  }

  async findMany() {
    return this.items
  }
}

import { randomInt } from 'node:crypto'

import { Distribution } from '@prisma/client'

import {
  CreateProps,
  DistributionsRepository,
  UpdateProps,
} from '../ditribution-repository'

export class InMemororyDistributionRepository
  implements DistributionsRepository
{
  public items: Distribution[] = []

  async create(data: CreateProps) {
    const { date, productId, unityId } = data

    const distribution = {
      id: randomInt(1000),
      date,
      productId,
      unityId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(distribution)

    return distribution
  }

  async update({ id, date, productId, unityId }: UpdateProps) {
    const distributionIndex = this.items.findIndex((item) => item.id === id)

    if (distributionIndex >= 0) {
      this.items[distributionIndex] = {
        id,
        date,
        productId,
        unityId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const distribution = this.items.find((item) => item.id === id)

      return distribution
    }
  }

  async delete(id: number) {
    const distributionIndex = this.items.findIndex((item) => item.id === id)

    if (distributionIndex >= 0) {
      this.items.splice(distributionIndex, 1)
    }
  }

  async findById(id: number) {
    const distribution = this.items.find((item) => item.id === id)

    if (!distribution) {
      return null
    }

    return distribution
  }

  async findMany() {
    return this.items
  }
}

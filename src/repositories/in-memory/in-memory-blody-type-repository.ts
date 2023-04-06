import { randomInt } from 'node:crypto'

import { BlodyType } from '@prisma/client'

import {
  BlodyTypesRepository,
  CreateProps,
  UpdateProps,
} from '../blody-type-repository'

export class InMemororyBlodyTypeRepository implements BlodyTypesRepository {
  public items: BlodyType[] = []

  async create(data: CreateProps) {
    const { factor, type } = data

    const blodyType = {
      id: randomInt(1000),
      factor,
      type,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(blodyType)

    return blodyType
  }

  async update({ id, factor, type }: UpdateProps) {
    const blodyTypeIndex = this.items.findIndex((item) => item.id === id)

    if (blodyTypeIndex >= 0) {
      this.items[blodyTypeIndex] = {
        id,
        factor,
        type,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const blodyType = this.items.find((item) => item.id === id)

      return blodyType
    }
  }

  async delete(id: number) {
    const blodyTypeIndex = this.items.findIndex((item) => item.id === id)

    if (blodyTypeIndex >= 0) {
      this.items.splice(blodyTypeIndex, 1)
    }
  }

  async findById(id: number) {
    const blodyType = this.items.find((item) => item.id === id)

    if (!blodyType) {
      return null
    }

    return blodyType
  }

  async findMany() {
    return this.items
  }
}

import { randomInt } from 'node:crypto'

import { Unity } from '@prisma/client'

import { CreateProps, UnitsRepository, UpdateProps } from '../units-repository'

export class InMemororyUnitsRepository implements UnitsRepository {
  public items: Unity[] = []

  async create(data: CreateProps) {
    const { cityId, complement, name, number } = data

    const unity = {
      id: randomInt(1000),
      cityId,
      complement,
      name,
      number,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(unity)

    return unity
  }

  async update({ id, name, cityId, complement, number }: UpdateProps) {
    const unityIndex = this.items.findIndex((item) => item.id === id)

    if (unityIndex >= 0) {
      this.items[unityIndex] = {
        id,
        name,
        cityId,
        complement,
        number,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const unity = this.items.find((item) => item.id === id)

      return unity
    }
  }

  async delete(id: number) {
    const unityIndex = this.items.findIndex((item) => item.id === id)

    if (unityIndex >= 0) {
      this.items.splice(unityIndex, 1)
    }
  }

  async findById(id: number) {
    const unity = this.items.find((item) => item.id === id)

    if (!unity) {
      return null
    }

    return unity
  }

  async findMany() {
    return this.items
  }
}

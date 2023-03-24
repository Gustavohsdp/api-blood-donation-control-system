import { randomInt } from 'node:crypto'

import { People } from '@prisma/client'

import {
  CreateProps,
  PeoplesRepository,
  UpdateProps
} from '../peoples-repository'

export class InMemororyPeoplesRepository implements PeoplesRepository {
  public items: People[] = []

  async create(data: CreateProps) {
    const { blodyTypeId, cityId, complement, document, number, name, street } =
      data

    const people: People = {
      id: randomInt(1000),
      blodyTypeId,
      cityId,
      complement,
      document,
      name,
      number,
      street,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(people)

    return people
  }

  async update({
    id,
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    number,
    street,
  }: UpdateProps) {
    const peopleIndex = this.items.findIndex((item) => item.id === id)

    if (peopleIndex >= 0) {
      this.items[peopleIndex] = {
        id,
        blodyTypeId,
        cityId,
        complement,
        document,
        name,
        number,
        street,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const people = this.items.find((item) => item.id === id)

      return people
    }
  }

  async delete(id: number) {
    const peopleIndex = this.items.findIndex((item) => item.id === id)

    if (peopleIndex >= 0) {
      this.items.splice(peopleIndex, 1)
    }
  }

  async findById(id: number) {
    const people = this.items.find((item) => item.id === id)

    if (!people) {
      return null
    }

    return people
  }

  async findMany() {
    return this.items
  }
}

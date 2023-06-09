import { randomInt } from 'node:crypto'

import { State } from '@prisma/client'

import {
  CreateProps,
  StatesRepository,
  UpdateProps,
} from '../states-repository'

export class InMemororyStatesRepository implements StatesRepository {
  public items: State[] = []

  async create(data: CreateProps): Promise<State> {
    const { abbreviation, name } = data

    const state = {
      id: randomInt(1000),
      name,
      abbreviation,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(state)

    return state
  }

  async update({ id, name, abbreviation }: UpdateProps) {
    const stateIndex = this.items.findIndex((item) => item.id === id)

    if (stateIndex >= 0) {
      this.items[stateIndex] = {
        id,
        name,
        abbreviation,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const state = this.items.find((item) => item.id === id)

      return state
    }
  }

  async delete(id: number) {
    const stateIndex = this.items.findIndex((item) => item.id === id)

    if (stateIndex >= 0) {
      this.items.splice(stateIndex, 1)
    }
  }

  async findById(id: number) {
    const state = this.items.find((item) => item.id === id)

    if (!state) {
      return null
    }

    return state
  }

  async findMany() {
    return this.items
  }
}

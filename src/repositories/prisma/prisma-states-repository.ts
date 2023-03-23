import { prisma } from '../../lib/prisma'
import {
  StatesRepository,
  StatesRepositoryProps,
  UpdateStateRepositoryProps
} from '../states-repository'

export class PrismaStatesRepository implements StatesRepository {
  async create(data: StatesRepositoryProps) {
    const { name, abbreviation } = data

    const state = await prisma.state.create({
      data: {
        name,
        abbreviation,
      },
    })

    return state
  }

  async update({ name, abbreviation, id }: UpdateStateRepositoryProps) {
    const state = await prisma.state.update({
      where: {
        id,
      },
      data: {
        name,
        abbreviation,
      },
    })

    return state
  }

  async delete(id: number) {
    await prisma.state.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const state = await prisma.state.findUnique({
      where: {
        id,
      },
    })

    return state
  }

  async findManyStates() {
    const states = await prisma.state.findMany()

    return states
  }
}

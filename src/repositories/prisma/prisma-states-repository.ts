import { prisma } from '../../lib/prisma'
import { StatesRepository, StatesRepositoryProps } from '../states-repository'

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

  async update(id: number, data: StatesRepositoryProps) {
    const { name, abbreviation } = data

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

  async findByIdOrName(id: number, name: string) {
    const state = await prisma.state.findUnique({
      where: {
        id,
        name,
      },
    })

    return state
  }

  async findManyCities() {
    const states = await prisma.state.findMany()

    return states
  }
}

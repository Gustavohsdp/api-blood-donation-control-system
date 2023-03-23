import { prisma } from '../../lib/prisma'
import {
  CreateProps,
  StatesRepository,
  UpdateProps,
} from '../states-repository'

export class PrismaStatesRepository implements StatesRepository {
  async create(data: CreateProps) {
    const { name, abbreviation } = data

    const state = await prisma.state.create({
      data: {
        name,
        abbreviation,
      },
    })

    return state
  }

  async update({ name, abbreviation, id }: UpdateProps) {
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

  async findMany() {
    const states = await prisma.state.findMany({
      include: {
        cities: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return states
  }
}

import { prisma } from '../../lib/prisma'
import {
  BlodyTypesRepository,
  CreateProps,
  UpdateProps,
} from '../blody-type-repository'

export class PrismaBlodyTypesRepository implements BlodyTypesRepository {
  async create(data: CreateProps) {
    const { factor, type } = data

    const blodyType = await prisma.blodyType.create({
      data: {
        factor,
        type,
      },
    })

    return blodyType
  }

  async update({ id, factor, type }: UpdateProps) {
    const blodyType = await prisma.blodyType.update({
      where: {
        id,
      },
      data: {
        factor,
        type,
      },
    })

    return blodyType
  }

  async delete(id: number) {
    await prisma.blodyType.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const blodyType = await prisma.blodyType.findUnique({
      where: {
        id,
      },
    })

    return blodyType
  }

  async findMany() {
    const blodyTypes = await prisma.blodyType.findMany({
      include: {
        peoples: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return blodyTypes
  }
}

import { UnitsRepository } from '@/repositories/units-repository'
import { prisma } from '../../lib/prisma'
import { CreateProps, UpdateProps } from '../units-repository'

export class PrismaUnitsRepository implements UnitsRepository {
  async create(data: CreateProps) {
    const { name, cityId, complement, number } = data

    const unity = await prisma.unity.create({
      data: {
        name,
        city: { connect: { id: cityId } },
        complement,
        number,
      },
    })

    return unity
  }

  async update({ name, cityId, complement, number, id }: UpdateProps) {
    const unity = await prisma.unity.update({
      where: {
        id,
      },
      data: {
        name,
        city: { connect: { id: cityId } },
        complement,
        number,
      },
    })

    return unity
  }

  async delete(id: number) {
    await prisma.unity.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const unity = await prisma.unity.findUnique({
      where: {
        id,
      },
    })

    return unity
  }

  async findMany() {
    const units = await prisma.unity.findMany({
      include: {
        distributions: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return units
  }
}

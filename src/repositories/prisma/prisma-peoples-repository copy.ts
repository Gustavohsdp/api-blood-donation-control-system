import { prisma } from '../../lib/prisma'
import {
  CreateProps,
  PeoplesRepository,
  UpdateProps
} from '../peoples-repository'

export class PrismaPeoplesRepository implements PeoplesRepository {
  async create(data: CreateProps) {
    const { blodyTypeId, name, cityId, complement, document, number, street } =
      data

    const people = await prisma.people.create({
      data: {
        name,
        complement,
        document,
        number,
        street,
        blodyType: { connect: { id: blodyTypeId } },
        city: { connect: { id: cityId } },
      },
    })

    return people
  }

  async update({
    id,
    blodyTypeId,
    name,
    cityId,
    complement,
    document,
    number,
    street,
  }: UpdateProps) {
    const people = await prisma.people.update({
      where: {
        id,
      },
      data: {
        name,
        complement,
        document,
        number,
        street,
        blodyType: { connect: { id: blodyTypeId } },
        city: { connect: { id: cityId } },
      },
    })

    return people
  }

  async delete(id: number) {
    await prisma.people.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const people = await prisma.people.findUnique({
      where: {
        id,
      },
    })

    return people
  }

  async findMany() {
    const peoples = await prisma.people.findMany({
      include: {
        donations: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return peoples
  }
}

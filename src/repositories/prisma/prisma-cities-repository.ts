import { prisma } from '../../lib/prisma'
import {
  CitiesRepository,
  CreateProps,
  UpdateProps,
} from '../cities-repository'

export class PrismaCitiesRepository implements CitiesRepository {
  async create(data: CreateProps) {
    const { name, stateId } = data

    const city = await prisma.city.create({
      data: {
        name,
        state: { connect: { id: stateId } },
      },
    })

    return city
  }

  async update(data: UpdateProps) {
    const { name, stateId, cityId } = data

    const city = await prisma.city.update({
      where: {
        id: cityId,
      },
      data: {
        name,
        state: { connect: { id: stateId } },
      },
    })

    return city
  }

  async delete(cityId: number) {
    await prisma.city.delete({
      where: {
        id: cityId,
      },
    })
  }

  async findById(cityId: number) {
    const city = await prisma.city.findFirst({
      where: {
        id: cityId,
      },
    })

    return city
  }

  async findMany() {
    const cities = await prisma.city.findMany({
      include: {
        collectionLocations: true,
        peoples: true,
        units: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return cities
  }
}

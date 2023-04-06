import {
  CreateProps,
  DistributionsRepository,
  UpdateProps,
} from '@/repositories/ditribution-repository'
import { prisma } from '../../lib/prisma'

export class PrismaDistributionsRepository implements DistributionsRepository {
  async create(data: CreateProps) {
    const { date, productId, unityId } = data

    const distribution = await prisma.distribution.create({
      data: {
        date,
        product: { connect: { id: productId } },
        unity: { connect: { id: unityId } },
      },
    })

    return distribution
  }

  async update({ id, date, productId, unityId }: UpdateProps) {
    const distribution = await prisma.distribution.update({
      where: {
        id,
      },
      data: {
        date,
        product: { connect: { id: productId } },
        unity: { connect: { id: unityId } },
      },
    })

    return distribution
  }

  async delete(id: number) {
    await prisma.distribution.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const distribution = await prisma.distribution.findUnique({
      where: {
        id,
      },
    })

    return distribution
  }

  async findMany() {
    const distributions = await prisma.distribution.findMany({
      orderBy: {
        id: 'asc',
      },
    })

    return distributions
  }
}

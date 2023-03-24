import { prisma } from '../../lib/prisma'
import {
  CreateProps,
  ProductsRepository,
  UpdateProps
} from '../products-repository'

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: CreateProps) {
    const { donationId, label, validity } = data

    const product = await prisma.product.create({
      data: {
        label,
        validity,
        donation: { connect: { id: donationId } },
      },
    })

    return product
  }

  async update({ id, donationId, label, validity }: UpdateProps) {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        label,
        validity,
        donation: { connect: { id: donationId } },
      },
    })

    return product
  }

  async delete(id: number) {
    await prisma.product.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: number) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return product
  }

  async findMany() {
    const products = await prisma.product.findMany({
      include: {
        distributions: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return products
  }
}

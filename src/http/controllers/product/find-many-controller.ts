import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyProductUseCase } from '@/use-cases/factories/product/make-find-many-people-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyProductUseCase()

  const { products } = await findManyUseCase.execute()

  return reply.status(200).send({ products })
}

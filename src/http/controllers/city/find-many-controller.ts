import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyCityUseCase } from '../../../use-cases/factories/city/make-find-many-city-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyCityUseCase()

  const { cities } = await findManyUseCase.execute()

  return reply.status(200).send({ cities })
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindManyCityUseCase } from '../../../use-cases/factories/city/make-find-many-city-use-case'

export async function findManyCities(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findManyCityUseCase = makeFindManyCityUseCase()

  const { cities } = await findManyCityUseCase.execute()

  return reply.status(200).send({ cities })
}

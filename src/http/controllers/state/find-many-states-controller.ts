import { makeFindManyStateUseCase } from '@/use-cases/factories/state/make-find-many-city-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findManyStates(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findManyStateUseCase = makeFindManyStateUseCase()

  const { states } = await findManyStateUseCase.execute()

  return reply.status(200).send({ states })
}

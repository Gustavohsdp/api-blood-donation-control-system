import { makeFindManyStateUseCase } from '@/use-cases/factories/state/make-find-many-state-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyStateUseCase()

  const { states } = await findManyUseCase.execute()

  return reply.status(200).send({ states })
}

import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyBlodyTypeUseCase } from '@/use-cases/factories/blodyType/make-find-many-blody-type-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyBlodyTypeUseCase()

  const { blodyTypes } = await findManyUseCase.execute()

  return reply.status(200).send({ blodyTypes })
}

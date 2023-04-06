import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyDistributionUseCase } from '@/use-cases/factories/distribution/make-find-many-distribution-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyDistributionUseCase()

  const { distributions } = await findManyUseCase.execute()

  return reply.status(200).send({ distributions })
}

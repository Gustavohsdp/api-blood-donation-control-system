import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyPeopleUseCase } from '@/use-cases/factories/people/make-find-many-people-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyPeopleUseCase()

  const { peoples } = await findManyUseCase.execute()

  return reply.status(200).send({ peoples })
}

import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyDonationUseCase } from '@/use-cases/factories/donation/make-find-many-donation-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyDonationUseCase()

  const { donations } = await findManyUseCase.execute()

  return reply.status(200).send({ donations })
}

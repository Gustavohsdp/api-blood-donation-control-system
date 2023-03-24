import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateDonationUseCase } from '@/use-cases/factories/donation/make-create-donation-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    date: z.string().transform((date) => new Date(date)),
    collectionSiteId: z.coerce.number(),
    peopleId: z.coerce.number(),
  })

  const { collectionSiteId, peopleId, date } = createBodySchema.parse(
    request.body,
  )

  const createUseCase = makeCreateDonationUseCase()

  const { donation } = await createUseCase.execute({
    collectionSiteId,
    peopleId,
    date,
  })

  return reply.status(201).send(donation)
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateDonationUseCase } from '@/use-cases/factories/donation/make-update-donation-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    date: z.string().transform((date) => new Date(date)),
    collectionSiteId: z.coerce.number(),
    peopleId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    donationId: z.coerce.number(),
  })

  const { collectionSiteId, peopleId, date } = updateBodySchema.parse(
    request.body,
  )
  const { donationId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateDonationUseCase()

  const { donation } = await updateUseCase.execute({
    collectionSiteId,
    peopleId,
    date,
    donationId,
  })

  return reply.status(200).send(donation)
}

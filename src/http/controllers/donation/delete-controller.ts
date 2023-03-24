import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteDonationUseCase } from '@/use-cases/factories/donation/make-delete-donation-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    donationId: z.coerce.number(),
  })

  const { donationId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteDonationUseCase()

  await deleteUseCase.execute({
    donationId,
  })

  return reply.status(200).send()
}

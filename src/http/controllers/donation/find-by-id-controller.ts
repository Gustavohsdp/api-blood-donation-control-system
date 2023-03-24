import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdDonationUseCase } from '@/use-cases/factories/donation/make-find-by-id-donation-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    donationId: z.coerce.number(),
  })

  const { donationId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdDonationUseCase()

  try {
    const { donation } = await findByIdUseCase.execute({
      donationId,
    })

    return reply.status(200).send({ donation })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

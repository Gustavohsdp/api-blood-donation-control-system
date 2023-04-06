import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateDistributionUseCase } from '@/use-cases/factories/distribution/make-create-distribution-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    date: z.string().transform((date) => new Date(date)),
    productId: z.coerce.number(),
    unityId: z.coerce.number(),
  })

  const { date, productId, unityId } = createBodySchema.parse(request.body)

  const createUseCase = makeCreateDistributionUseCase()

  const { distribution } = await createUseCase.execute({
    date,
    productId,
    unityId,
  })

  return reply.status(201).send(distribution)
}

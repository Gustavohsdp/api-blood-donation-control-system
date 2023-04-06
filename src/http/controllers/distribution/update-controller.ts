import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateDistributionUseCase } from '@/use-cases/factories/distribution/make-update-distribution-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    date: z.string().transform((date) => new Date(date)),
    productId: z.coerce.number(),
    unityId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    distributionId: z.coerce.number(),
  })

  const { date, productId, unityId } = updateBodySchema.parse(request.body)
  const { distributionId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateDistributionUseCase()

  const { distribution } = await updateUseCase.execute({
    date,
    distributionId,
    productId,
    unityId,
  })

  return reply.status(200).send(distribution)
}

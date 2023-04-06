import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteDistributionUseCase } from '@/use-cases/factories/distribution/make-delete-distribution-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    distributionId: z.coerce.number(),
  })

  const { distributionId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteDistributionUseCase()

  await deleteUseCase.execute({
    distributionId,
  })

  return reply.status(200).send()
}

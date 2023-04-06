import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateBlodyTypeUseCase } from '@/use-cases/factories/blodyType/make-update-blody-type-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    type: z.string(),
    factor: z.string(),
  })

  const updateParamsSchema = z.object({
    blodyTypeId: z.coerce.number(),
  })

  const { type, factor } = updateBodySchema.parse(request.body)
  const { blodyTypeId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateBlodyTypeUseCase()

  const { blodyType } = await updateUseCase.execute({
    type,
    factor,
    blodyTypeId,
  })

  return reply.status(200).send(blodyType)
}

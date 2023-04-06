import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateBlodyTypeUseCase } from '@/use-cases/factories/blodyType/make-create-blody-type-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    type: z.string(),
    factor: z.string(),
  })

  const { type, factor } = createBodySchema.parse(request.body)

  const createUseCase = makeCreateBlodyTypeUseCase()

  const { blodyType } = await createUseCase.execute({
    factor,
    type,
  })

  return reply.status(201).send(blodyType)
}

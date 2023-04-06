import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteBlodyTypeUseCase } from '@/use-cases/factories/blodyType/make-delete-blody-type-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    blodyTypeId: z.coerce.number(),
  })

  const { blodyTypeId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteBlodyTypeUseCase()

  await deleteUseCase.execute({
    blodyTypeId,
  })

  return reply.status(200).send()
}

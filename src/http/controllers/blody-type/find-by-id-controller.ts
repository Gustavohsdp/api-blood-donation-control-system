import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdBlodyTypeUseCase } from '@/use-cases/factories/blodyType/make-find-by-id-blody-type-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    blodyTypeId: z.coerce.number(),
  })

  const { blodyTypeId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdBlodyTypeUseCase()

  try {
    const { blodyType } = await findByIdUseCase.execute({
      blodyTypeId,
    })

    return reply.status(200).send({ blodyType })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdDistributionUseCase } from '@/use-cases/factories/distribution/make-find-by-id-distribution-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    distributionId: z.coerce.number(),
  })

  const { distributionId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdDistributionUseCase()

  try {
    const { distribution } = await findByIdUseCase.execute({
      distributionId,
    })

    return reply.status(200).send({ distribution })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

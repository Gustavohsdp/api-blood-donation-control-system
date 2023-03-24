import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdProductUseCase } from '@/use-cases/factories/product/make-find-by-id-people-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    productId: z.coerce.number(),
  })

  const { productId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdProductUseCase()

  try {
    const { product } = await findByIdUseCase.execute({
      productId,
    })

    return reply.status(200).send({ product })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

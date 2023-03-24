import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteProductUseCase } from '@/use-cases/factories/product/make-delete-people-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    productId: z.coerce.number(),
  })

  const { productId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteProductUseCase()

  await deleteUseCase.execute({
    productId,
  })

  return reply.status(200).send()
}

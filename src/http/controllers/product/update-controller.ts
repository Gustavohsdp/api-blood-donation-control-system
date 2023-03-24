import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateProductUseCase } from '@/use-cases/factories/product/make-update-people-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    label: z.string(),
    validity: z.string().transform((date) => new Date(date)),
    donationId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    productId: z.coerce.number(),
  })

  const { donationId, label, validity } = updateBodySchema.parse(request.body)
  const { productId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateProductUseCase()

  const { product } = await updateUseCase.execute({
    donationId,
    label,
    validity,
    productId,
  })

  return reply.status(200).send(product)
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateProductUseCase } from '@/use-cases/factories/product/make-create-people-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    label: z.string(),
    validity: z.string().transform((date) => new Date(date)),
    donationId: z.coerce.number(),
  })

  const { donationId, label, validity } = createBodySchema.parse(request.body)

  const createUseCase = makeCreateProductUseCase()

  const { product } = await createUseCase.execute({
    donationId,
    label,
    validity,
  })

  return reply.status(201).send(product)
}

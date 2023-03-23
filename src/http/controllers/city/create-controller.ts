import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateCityUseCase } from '../../../use-cases/factories/city/make-create-city-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    stateId: z.number(),
  })

  const { name, stateId } = createBodySchema.parse(request.body)

  const createUseCase = makeCreateCityUseCase()

  const { city } = await createUseCase.execute({
    name,
    stateId,
  })

  return reply.status(201).send(city)
}

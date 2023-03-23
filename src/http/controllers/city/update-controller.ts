import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateCityUseCase } from '../../../use-cases/factories/city/make-update-city-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    stateId: z.number(),
  })

  const updateParamsSchema = z.object({
    cityId: z.coerce.number(),
  })

  const { name, stateId } = updateBodySchema.parse(request.body)
  const { cityId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateCityUseCase()

  const { city } = await updateUseCase.execute({
    name,
    stateId,
    cityId,
  })

  return reply.status(200).send(city)
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateCityUseCase } from '../../../use-cases/factories/city/make-update-city-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateCityBodySchema = z.object({
    name: z.string(),
    stateId: z.number(),
  })

  const updateCityParamsSchema = z.object({
    cityId: z.coerce.number(),
  })

  const { name, stateId } = updateCityBodySchema.parse(request.body)
  const { cityId } = updateCityParamsSchema.parse(request.params)

  const updateCityUseCase = makeUpdateCityUseCase()

  await updateCityUseCase.execute({
    name,
    stateId,
    cityId,
  })

  return reply.status(200).send()
}

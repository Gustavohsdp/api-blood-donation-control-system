import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeDeleteCityUseCase } from '../../../use-cases/factories/city/make-delete-city-use-case'

export async function deleteCity(request: FastifyRequest, reply: FastifyReply) {
  const deleteCityParamsSchema = z.object({
    cityId: z.coerce.number(),
  })

  const { cityId } = deleteCityParamsSchema.parse(request.params)

  const deleteCityUseCase = makeDeleteCityUseCase()

  await deleteCityUseCase.execute({
    cityId,
  })

  return reply.status(200).send()
}

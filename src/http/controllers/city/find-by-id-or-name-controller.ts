import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'
import { makeFindByIdOrNameCityUseCase } from '../../../use-cases/factories/city/make-find-by-id-or-name-city-use-case'

export async function findByIdOrName(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateCityQuerySchema = z.object({
    name: z.string(),
    cityId: z.coerce.number(),
  })

  const { name, cityId } = updateCityQuerySchema.parse(request.query)

  const findByIdOrNameCityUseCase = makeFindByIdOrNameCityUseCase()

  try {
    const { city } = await findByIdOrNameCityUseCase.execute({
      name,
      cityId,
    })

    return reply.status(200).send({ city })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

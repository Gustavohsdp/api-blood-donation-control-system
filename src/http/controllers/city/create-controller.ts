import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateCityUseCase } from '../../../use-cases/factories/city/make-create-city-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createCityBodySchema = z.object({
    name: z.string(),
    stateId: z.number(),
  })

  const { name, stateId } = createCityBodySchema.parse(request.body)

  const createCityUseCase = makeCreateCityUseCase()

  await createCityUseCase.execute({
    name,
    stateId,
  })

  return reply.status(201).send()
}

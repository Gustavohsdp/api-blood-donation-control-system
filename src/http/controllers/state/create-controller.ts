import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateStateUseCase } from '../../../use-cases/factories/state/make-create-state-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createCityBodySchema = z.object({
    name: z.string(),
    abbreviation: z.string(),
  })

  const { name, abbreviation } = createCityBodySchema.parse(request.body)

  const createStateUseCase = makeCreateStateUseCase()

  await createStateUseCase.execute({
    name,
    abbreviation,
  })

  return reply.status(201).send()
}

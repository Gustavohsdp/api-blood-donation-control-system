import { makeUpdateStateUseCase } from '@/use-cases/factories/state/make-update-state-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    abbreviation: z.string(),
  })

  const updateParamsSchema = z.object({
    stateId: z.coerce.number(),
  })

  const { name, abbreviation } = updateBodySchema.parse(request.body)
  const { stateId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateStateUseCase()

  const { state } = await updateUseCase.execute({
    name,
    abbreviation,
    id: stateId,
  })

  return reply.status(200).send(state)
}

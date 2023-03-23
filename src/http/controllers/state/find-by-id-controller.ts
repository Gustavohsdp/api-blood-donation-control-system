import { makeFindByIdStateUseCase } from '@/use-cases/factories/state/make-find-by-id-state-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const ParamsSchema = z.object({
    stateId: z.coerce.number(),
  })

  const { stateId } = ParamsSchema.parse(request.params)

  const findByIdStateUseCase = makeFindByIdStateUseCase()

  try {
    const { state } = await findByIdStateUseCase.execute({
      id: stateId,
    })

    return reply.status(200).send({ state })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

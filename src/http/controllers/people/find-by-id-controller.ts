import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdPeopleUseCase } from '@/use-cases/factories/people/make-find-by-id-people-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    peopleId: z.coerce.number(),
  })

  const { peopleId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdPeopleUseCase()

  try {
    const { people } = await findByIdUseCase.execute({
      peopleId,
    })

    return reply.status(200).send({ people })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

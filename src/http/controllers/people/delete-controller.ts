import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeletePeopleUseCase } from '@/use-cases/factories/people/make-delete-people-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    peopleId: z.coerce.number(),
  })

  const { peopleId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeletePeopleUseCase()

  await deleteUseCase.execute({
    peopleId,
  })

  return reply.status(200).send()
}

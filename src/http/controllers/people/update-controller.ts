import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdatePeopleUseCase } from '@/use-cases/factories/people/make-update-people-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    document: z.string(),
    cityId: z.coerce.number(),
    blodyTypeId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    peopleId: z.coerce.number(),
  })

  const { blodyTypeId, cityId, complement, document, name, number, street } =
    updateBodySchema.parse(request.body)
  const { peopleId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdatePeopleUseCase()

  const { people } = await updateUseCase.execute({
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    number,
    street,
    peopleId,
  })

  return reply.status(200).send(people)
}

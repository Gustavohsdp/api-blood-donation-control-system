import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreatePeopleUseCase } from '@/use-cases/factories/people/make-create-people-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    document: z.string(),
    cityId: z.coerce.number(),
    blodyTypeId: z.coerce.number(),
  })

  const { blodyTypeId, cityId, complement, document, name, number, street } =
    createBodySchema.parse(request.body)

  const createUseCase = makeCreatePeopleUseCase()

  const { people } = await createUseCase.execute({
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    number,
    street,
  })

  return reply.status(201).send(people)
}

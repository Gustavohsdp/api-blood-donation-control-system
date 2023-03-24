import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateUnityUseCase } from '@/use-cases/factories/unity/make-create-unity-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    number: z.string(),
    complement: z.string(),
    cityId: z.coerce.number(),
  })

  const { name, number, complement, cityId } = createBodySchema.parse(
    request.body,
  )

  const createUseCase = makeCreateUnityUseCase()

  const { unity } = await createUseCase.execute({
    name,
    number,
    complement,
    cityId,
  })

  return reply.status(201).send(unity)
}

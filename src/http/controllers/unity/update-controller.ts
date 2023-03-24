import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateUnityUseCase } from '@/use-cases/factories/unity/make-update-unity-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    number: z.string(),
    complement: z.string(),
    cityId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    unityId: z.coerce.number(),
  })

  const { name, cityId, complement, number } = updateBodySchema.parse(
    request.body,
  )
  const { unityId } = updateParamsSchema.parse(request.params)

  const updateUseCase = makeUpdateUnityUseCase()

  const { unity } = await updateUseCase.execute({
    name,
    cityId,
    complement,
    number,
    unityId,
  })

  return reply.status(200).send(unity)
}

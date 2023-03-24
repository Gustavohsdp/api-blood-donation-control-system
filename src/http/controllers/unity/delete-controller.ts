import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteUnityUseCase } from '@/use-cases/factories/unity/make-delete-unity-use-case'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    unityId: z.coerce.number(),
  })

  const { unityId } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteUnityUseCase()

  await deleteUseCase.execute({
    unityId,
  })

  return reply.status(200).send()
}

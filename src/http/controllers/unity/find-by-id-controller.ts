import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindByIdUnityUseCase } from '@/use-cases/factories/unity/make-find-by-id-unity-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    unityId: z.coerce.number(),
  })

  const { unityId } = paramsSchema.parse(request.params)

  const findByIdUseCase = makeFindByIdUnityUseCase()

  try {
    const { unity } = await findByIdUseCase.execute({
      unityId,
    })

    return reply.status(200).send({ unity })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

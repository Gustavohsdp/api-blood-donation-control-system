import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFindManyUnityUseCase } from '@/use-cases/factories/unity/make-find-many-unity-use-case'

export async function findMany(request: FastifyRequest, reply: FastifyReply) {
  const findManyUseCase = makeFindManyUnityUseCase()

  const { units } = await findManyUseCase.execute()

  return reply.status(200).send({ units })
}

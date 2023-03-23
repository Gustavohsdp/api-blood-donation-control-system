import { makeFindManyCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-find-many-collection-site-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findManyStates(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findManyUseCase = makeFindManyCollectionSiteUseCase()

  const { colletionSites } = await findManyUseCase.execute()

  return reply.status(200).send({ colletionSites })
}

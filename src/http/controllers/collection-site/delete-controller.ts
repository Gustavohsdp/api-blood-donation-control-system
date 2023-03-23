import { makeDeleteCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-delete-collection-site-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteState(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteParamsSchema = z.object({
    collectionSiteId: z.coerce.number(),
  })

  const { collectionSiteId } = deleteParamsSchema.parse(request.params)

  const deleteCollectionSiteUseCase = makeDeleteCollectionSiteUseCase()

  await deleteCollectionSiteUseCase.execute({
    collectionSiteId,
  })

  return reply.status(200).send()
}

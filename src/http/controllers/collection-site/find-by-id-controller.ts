import { makeFindByIdCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-find-by-id-collection-site-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    collectionSiteId: z.coerce.number(),
  })

  const { collectionSiteId } = paramsSchema.parse(request.params)

  const findByIdCollectionSiteUseCase = makeFindByIdCollectionSiteUseCase()

  try {
    const { collectionSite } = await findByIdCollectionSiteUseCase.execute({
      collectionSiteId,
    })

    return reply.status(200).send({ collectionSite })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      })
    }

    throw err
  }
}

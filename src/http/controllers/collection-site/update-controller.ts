import { makeUpdateCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-update-collection-site-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    name: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    cityId: z.coerce.number(),
  })

  const updateParamsSchema = z.object({
    collectionSiteId: z.coerce.number(),
  })

  const { name, cityId, complement, number, street } = updateBodySchema.parse(
    request.body,
  )
  const { collectionSiteId } = updateParamsSchema.parse(request.params)

  const updateStateUseCase = makeUpdateCollectionSiteUseCase()

  const { collectionSite } = await updateStateUseCase.execute({
    name,
    cityId,
    complement,
    number,
    street,
    collectionSiteId,
  })

  return reply.status(200).send(collectionSite)
}

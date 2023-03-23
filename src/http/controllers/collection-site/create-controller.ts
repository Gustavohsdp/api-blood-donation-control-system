import { makeCreateCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-create-collection-site-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    cityId: z.coerce.number(),
  })

  const { name, street, number, complement, cityId } = createBodySchema.parse(
    request.body,
  )

  const createCollectionSiteUseCase = makeCreateCollectionSiteUseCase()

  const { collectionSite } = await createCollectionSiteUseCase.execute({
    name,
    street,
    number,
    complement,
    cityId,
  })

  return reply.status(201).send(collectionSite)
}

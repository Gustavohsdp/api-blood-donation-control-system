import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeDeleteCollectionSiteUseCase } from '@/use-cases/factories/collectionSite/make-delete-collection-site-use-case';

export async function deleteCollectionSite(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteParamsSchema = z.object({
    collectionSiteId: z.coerce.number(),
  });

  const { collectionSiteId } = deleteParamsSchema.parse(request.params);

  const deleteUseCase = makeDeleteCollectionSiteUseCase();

  await deleteUseCase.execute({
    collectionSiteId,
  });

  return reply.status(200).send();
}

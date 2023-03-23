import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeDeleteStateUseCase } from '@/use-cases/factories/state/make-delete-state-use-case';

export async function deleteState(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteParamsSchema = z.object({
    stateId: z.coerce.number(),
  });

  const { stateId } = deleteParamsSchema.parse(request.params);

  const deleteUseCase = makeDeleteStateUseCase();

  await deleteUseCase.execute({
    id: stateId,
  });

  return reply.status(200).send();
}

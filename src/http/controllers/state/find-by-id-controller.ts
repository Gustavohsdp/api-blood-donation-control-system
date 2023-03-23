import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeFindByIdStateUseCase } from '@/use-cases/factories/state/make-find-by-id-state-use-case';

import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error';

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    stateId: z.coerce.number(),
  });

  const { stateId } = paramsSchema.parse(request.params);

  const findByIdUseCase = makeFindByIdStateUseCase();

  try {
    const { state } = await findByIdUseCase.execute({
      id: stateId,
    });

    return reply.status(200).send({ state });
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}

import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeFindByIdCityUseCase } from '@/use-cases/factories/city/make-find-by-id-use-case';

import { ResourceNotFoundError } from '../../../use-cases/errors/resource-not-found-error';

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    cityId: z.coerce.number(),
  });

  const { cityId } = paramsSchema.parse(request.query);

  const findByIdUseCase = makeFindByIdCityUseCase();

  try {
    const { city } = await findByIdUseCase.execute({
      cityId,
    });

    return reply.status(200).send({ city });
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}

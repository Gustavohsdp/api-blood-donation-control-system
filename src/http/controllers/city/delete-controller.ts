import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeDeleteCityUseCase } from '../../../use-cases/factories/city/make-delete-city-use-case';

export async function deleteCity(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    cityId: z.coerce.number(),
  });

  const { cityId } = deleteParamsSchema.parse(request.params);

  const deleteUseCase = makeDeleteCityUseCase();

  await deleteUseCase.execute({
    cityId,
  });

  return reply.status(200).send();
}

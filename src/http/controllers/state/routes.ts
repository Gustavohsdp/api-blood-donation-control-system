import { FastifyInstance } from 'fastify';

import { create } from './create-controller';
import { deleteState } from './delete-controller';
import { findById } from './find-by-id-controller';
import { findMany } from './find-many-controller';
import { update } from './update-controller';

export async function statesRoutes(app: FastifyInstance) {
  app.post('/state', create);

  app.patch('/state/:stateId', update);

  app.delete('/state/:stateId', deleteState);

  app.get('/state/:stateId', findById);
  app.get('/state/many', findMany);
}

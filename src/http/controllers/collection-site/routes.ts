import { FastifyInstance } from 'fastify';

import { create } from './create-controller';
import { deleteCollectionSite } from './delete-controller';
import { findById } from './find-by-id-controller';
import { findMany } from './find-many-controller';
import { update } from './update-controller';

export async function collectionSitesRoutes(app: FastifyInstance) {
  app.post('/collection-site', create);

  app.patch('/collection-site/:collectionSiteId', update);

  app.delete('/collection-site/:collectionSiteId', deleteCollectionSite);

  app.get('/collection-site/:collectionSiteId', findById);
  app.get('/collection-site/many', findMany);
}

import { FastifyInstance } from 'fastify'
import { create } from './create-controller'
import { deleteState } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findManyStates } from './find-many-states-controller'
import { update } from './update-controller'

export async function collectionSitesRoutes(app: FastifyInstance) {
  app.post('/collection-site', create)

  app.patch('/collection-site/:collectionSiteId', update)

  app.delete('/collection-site/:collectionSiteId', deleteState)

  app.get('/collection-site/:collectionSiteId', findById)
  app.get('/collection-site/many', findManyStates)
}

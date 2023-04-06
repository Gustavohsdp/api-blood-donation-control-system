import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function distributionsRoutes(app: FastifyInstance) {
  app.post('/distribution', create)

  app.patch('/distribution/:distributionId', update)

  app.delete('/distribution/:distributionId', remove)

  app.get('/distribution/:distributionId', findById)
  app.get('/distribution/many', findMany)
}

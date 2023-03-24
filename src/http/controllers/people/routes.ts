import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function peoplesRoutes(app: FastifyInstance) {
  app.post('/people', create)

  app.patch('/people/:peopleId', update)

  app.delete('/people/:peopleId', remove)

  app.get('/people/:peopleId', findById)
  app.get('/people/many', findMany)
}

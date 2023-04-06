import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function blodyTypesRoutes(app: FastifyInstance) {
  app.post('/blody-type', create)

  app.patch('/blody-type/:blodyTypeId', update)

  app.delete('/blody-type/:blodyTypeId', remove)

  app.get('/blody-type/:blodyTypeId', findById)
  app.get('/blody-type/many', findMany)
}

import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function unitsRoutes(app: FastifyInstance) {
  app.post('/unity', create)

  app.patch('/unity/:unityId', update)

  app.delete('/unity/:unityId', remove)

  app.get('/unity/:unityId', findById)
  app.get('/unity/many', findMany)
}

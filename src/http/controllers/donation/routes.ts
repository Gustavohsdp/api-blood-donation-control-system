import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function donationsRoutes(app: FastifyInstance) {
  app.post('/donation', create)

  app.patch('/donation/:donationId', update)

  app.delete('/donation/:donationId', remove)

  app.get('/donation/:donationId', findById)
  app.get('/donation/many', findMany)
}

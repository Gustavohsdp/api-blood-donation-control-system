import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { remove } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function productsRoutes(app: FastifyInstance) {
  app.post('/product', create)

  app.patch('/product/:productId', update)

  app.delete('/product/:productId', remove)

  app.get('/product/:productId', findById)
  app.get('/product/many', findMany)
}

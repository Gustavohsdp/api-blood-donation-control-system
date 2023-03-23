import { FastifyInstance } from 'fastify'

import { create } from './create-controller'
import { deleteCity } from './delete-controller'
import { findById } from './find-by-id-controller'
import { findMany } from './find-many-controller'
import { update } from './update-controller'

export async function citiesRoutes(app: FastifyInstance) {
  app.post('/city', create)

  app.patch('/city/:cityId', update)

  app.delete('/city/:cityId', deleteCity)

  app.get('/city/:cityId', findById)
  app.get('/city/many', findMany)
}

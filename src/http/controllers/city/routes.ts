import { FastifyInstance } from 'fastify'
import { create } from './create-controller'
import { deleteCity } from './delete-controller'
import { findByIdOrName } from './find-by-id-or-name-controller'
import { findManyCities } from './find-many-cities-controller'
import { update } from './update-controller'

export async function citiesRoutes(app: FastifyInstance) {
  app.post('/city', create)

  app.patch('/city/:cityId', update)

  app.delete('/city/:cityId', deleteCity)

  app.get('/city', findByIdOrName)
  app.get('/city/many', findManyCities)
}

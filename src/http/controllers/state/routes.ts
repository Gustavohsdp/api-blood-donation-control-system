import { FastifyInstance } from 'fastify'
import { create } from './create-controller'

export async function statesRoutes(app: FastifyInstance) {
  app.post('/state', create)
}

import process from 'node:process'
// Import the framework and instantiate it
import cors from '@fastify/cors'
import Fastify from 'fastify'
import connect from "./connect.js";

const fastify = Fastify({
  logger: true,
})

fastify.register(cors)

// Declare a route
fastify.get('/', async (/* request, reply */) => {
  return { hello: 'world' }
})

fastify.get('/version', async (_request, reply) => {
  return reply.send('1.0.0')
})

// Get port from environment
const port = process.env.PORT || 4000

// Run the server!
try {
  await connect();
  await fastify.listen({ port, host: '::' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

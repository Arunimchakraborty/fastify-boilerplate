// ESM
import fastifyMongo from '@fastify/mongodb'
import fp from 'fastify-plugin'
import mongoDB from '../configs/DB/MongoDB/mongoDB'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
export default fp(async (fastify) => {
		// Deconstructed the env files
		// Registed fastify mongo
		await fastify.register(fastifyMongo, {
			url: mongoDB.url,
		});
		console.log("Connected to Mongo DB");
	}
)

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.

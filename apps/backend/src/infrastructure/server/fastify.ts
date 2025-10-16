import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { workshopRoutes } from "../../domains/workshops/routes/workshop-routes.js";

const fastify = Fastify({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

// Register plugins
await fastify.register(cors, {
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
});

await fastify.register(helmet, {
  contentSecurityPolicy: false,
});

// Register domain routes
await fastify.register(workshopRoutes, { prefix: "/api" });

// Health check endpoint
fastify.get("/health", async (request, reply) => {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
});

// Global error handler
fastify.setErrorHandler(async (error, request, reply) => {
  fastify.log.error(error);

  reply.status(500).send({
    success: false,
    error: "Internal server error",
    message: error.message,
  });
});

// Start server
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 4000;
    const host = process.env.HOST || "0.0.0.0";

    await fastify.listen({ port, host });

    console.log(
      `🚀 Backend development server running on http://localhost:${port}`
    );
    console.log(`📋 Health check: http://localhost:${port}/health`);
    console.log(`🎯 API base: http://localhost:${port}/api`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

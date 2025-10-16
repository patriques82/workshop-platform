import type { FastifyInstance } from "fastify";
import {
  createWorkshopHandler,
  getAllWorkshopsHandler,
  getWorkshopByIdHandler,
} from "../controllers/workshop-controller.js";

export async function workshopRoutes(fastify: FastifyInstance) {
  fastify.post("/workshops", createWorkshopHandler);
  fastify.get("/workshops", getAllWorkshopsHandler);
  fastify.get("/workshops/:id", getWorkshopByIdHandler);
}

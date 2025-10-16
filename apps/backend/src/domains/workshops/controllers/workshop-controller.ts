import type { FastifyRequest, FastifyReply } from "fastify";
import type { CreateWorkshopInput } from "../../../../../../packages/types/src/workshop.js";
import * as workshopService from "../services/workshop-service.js";

export async function createWorkshopHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const input = request.body as CreateWorkshopInput;
    const workshop = await workshopService.createWorkshop(input);

    reply.status(201).send({
      success: true,
      data: workshop,
    });
  } catch (error) {
    reply.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function getAllWorkshopsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const workshops = await workshopService.getAllWorkshops();

    reply.send({
      success: true,
      data: workshops,
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function getWorkshopByIdHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = request.params as { id: string };
    const workshop = await workshopService.getWorkshopById(id);

    if (!workshop) {
      reply.status(404).send({
        success: false,
        error: "Workshop not found",
      });
      return;
    }

    reply.send({
      success: true,
      data: workshop,
    });
  } catch (error) {
    reply.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

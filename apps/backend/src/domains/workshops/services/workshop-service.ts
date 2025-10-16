import type { Workshop, CreateWorkshopInput } from "@workshop/types";
import * as workshopRepo from "../repositories/workshop-repository.js";

export async function createWorkshop(
  input: CreateWorkshopInput
): Promise<Workshop> {
  // Business logic validation
  if (input.maxParticipants <= 0) {
    throw new Error("Max participants must be positive");
  }

  if (new Date(input.date) < new Date()) {
    throw new Error("Workshop date must be in the future");
  }

  if (input.price < 0) {
    throw new Error("Price cannot be negative");
  }

  return workshopRepo.createWorkshop(input);
}

export async function getAllWorkshops(): Promise<Workshop[]> {
  return workshopRepo.findAllWorkshops();
}

export async function getWorkshopById(id: string): Promise<Workshop | null> {
  if (!id) {
    throw new Error("Workshop ID is required");
  }

  return workshopRepo.findWorkshopById(id);
}

export async function updateWorkshop(
  id: string,
  input: Partial<Workshop>
): Promise<Workshop | null> {
  if (!id) {
    throw new Error("Workshop ID is required");
  }

  const existing = await workshopRepo.findWorkshopById(id);
  if (!existing) {
    throw new Error("Workshop not found");
  }

  return workshopRepo.updateWorkshop(id, input);
}

export async function deleteWorkshop(id: string): Promise<void> {
  if (!id) {
    throw new Error("Workshop ID is required");
  }

  const deleted = await workshopRepo.deleteWorkshop(id);
  if (!deleted) {
    throw new Error("Workshop not found");
  }
}

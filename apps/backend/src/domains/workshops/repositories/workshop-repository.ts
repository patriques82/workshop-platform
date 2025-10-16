import type { Workshop, CreateWorkshopInput } from "@workshop/types";

// Mock data
let workshops: Workshop[] = [
  {
    id: "1",
    title: "Mindfulness & Meditation",
    description: "Learn basic meditation techniques",
    date: "2024-12-01T10:00:00Z",
    location: "Stockholm, Sweden",
    maxParticipants: 15,
    price: 500,
    hostId: "host-1",
    createdAt: "2024-10-15T08:00:00Z",
    updatedAt: "2024-10-15T08:00:00Z",
  },
  {
    id: "2",
    title: "Stress Management Workshop",
    description: "Practical tools for managing daily stress",
    date: "2024-12-15T14:00:00Z",
    location: "Göteborg, Sweden",
    maxParticipants: 20,
    price: 750,
    hostId: "host-1",
    createdAt: "2024-10-15T08:00:00Z",
    updatedAt: "2024-10-15T08:00:00Z",
  },
];

export async function createWorkshop(
  input: CreateWorkshopInput
): Promise<Workshop> {
  const workshop: Workshop = {
    id: Date.now().toString(),
    ...input,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  workshops.push(workshop);
  return workshop;
}

export async function findAllWorkshops(): Promise<Workshop[]> {
  return workshops;
}

export async function findWorkshopById(id: string): Promise<Workshop | null> {
  return workshops.find((w) => w.id === id) || null;
}

export async function updateWorkshop(
  id: string,
  input: Partial<Workshop>
): Promise<Workshop | null> {
  const index = workshops.findIndex((w) => w.id === id);
  if (index === -1) return null;

  workshops[index] = {
    ...workshops[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };

  return workshops[index];
}

export async function deleteWorkshop(id: string): Promise<boolean> {
  const index = workshops.findIndex((w) => w.id === id);
  if (index === -1) return false;

  workshops.splice(index, 1);
  return true;
}

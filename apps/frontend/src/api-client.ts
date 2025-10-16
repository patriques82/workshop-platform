import type { CreateWorkshopInput } from "@workshop/types"; // Adjust the path as needed

const API_BASE = "http://localhost:4000/api";

export const workshopApi = {
  async getWorkshops() {
    const response = await fetch(`${API_BASE}/workshops`);
    return response.json();
  },

  async createWorkshop(workshop: CreateWorkshopInput) {
    const response = await fetch(`${API_BASE}/workshops`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workshop),
    });
    return response.json();
  },
};

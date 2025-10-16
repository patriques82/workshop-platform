// Export all workshop types
export * from "./workshop.js";

// Add other shared types as you create them
export interface User {
  id: string;
  email: string;
  name: string;
  role: "host" | "participant";
}

export interface Session {
  id: string;
  workshopId: string;
  participantId: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

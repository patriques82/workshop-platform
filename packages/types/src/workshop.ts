export type Workshop = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  maxParticipants: number;
  price: number;
  hostId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateWorkshopInput = {
  title: string;
  description: string;
  date: string;
  location: string;
  maxParticipants: number;
  price: number;
  hostId: string;
};

export type UpdateWorkshopInput = Partial<CreateWorkshopInput>;

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};

import type { Property } from "./property";

export type Producer = {
  id: number;
  name: string;
  document: string;
  properties: Property[];
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
};

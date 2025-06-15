import type { Harvest } from "./harvest";

export type Property = {
  id: number;
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  producerId: number;
  createdAt: string;
  updatedAt: string;
  harvests: Harvest[];
};

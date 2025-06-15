import type { Crop } from "./crop";

export type Harvest = {
  id: number;
  year: number;
  propertyId: number;
  crops: Crop[];
};

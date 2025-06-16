import type { Property } from "@/@types/property";
import { api } from "@/config/api";

export function getAllProperties() {
  return api.get<Property[]>("/properties");
}

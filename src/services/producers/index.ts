import type { Paginated, Pagination } from "@/@types/pagination";
import type { Producer } from "@/@types/producer";
import { api } from "@/config/api";

export async function getProducersPaginated(params: Pagination) {
  return api.get<Paginated<Producer>>("/producers", {
    params,
  });
}

export async function getProducerById(id: number) {
  return api.get<Producer>(`/producers/${id}`);
}

export async function deleteProducer(id: number) {
  return api.delete<void>(`/producers/${id}`);
}

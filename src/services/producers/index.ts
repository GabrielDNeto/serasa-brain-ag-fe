import type { Paginated, Pagination } from "@/@types/pagination";
import type { Producer } from "@/@types/producer";
import { api } from "@/config/api";

export async function getProducersPaginated(
  params: Pagination,
  search?: string,
) {
  return api.get<Paginated<Producer>>("/producers", {
    params: {
      ...params,
      search: search || undefined,
    },
  });
}

export async function getProducerById(id: number) {
  return api.get<Producer>(`/producers/${id}`);
}

export async function createProducer(data: Partial<Producer>) {
  return api.post<Producer>("/producers/create", data);
}

export async function updateProducer(data: Partial<Producer>) {
  const { id, ...rest } = data;
  return api.put<void>(`/producers/${id}`, rest);
}

export async function deleteProducer(id: number) {
  return api.delete<void>(`/producers/${id}`);
}

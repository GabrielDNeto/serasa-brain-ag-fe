import { api } from "@/config/api";

interface IStates {
  id: number;
  sigla: string;
  nome: string;
}

export async function getStates() {
  return api.get<IStates[]>(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
  );
}

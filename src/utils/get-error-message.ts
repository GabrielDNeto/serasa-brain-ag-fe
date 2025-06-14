import { AxiosError } from "axios";

type ErrorResponse = {
  message?: string;
};

export function getErrorMessage(
  error: unknown,
  fallback = "Ocorreu um erro inesperado",
): string {
  // Primeiro: verifica se é um erro do axios
  if ((error as AxiosError)?.isAxiosError) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return axiosError.response?.data?.message || fallback;
  }

  // Segundo: se for um erro comum do JS
  if (error instanceof Error && error.message) {
    return error.message;
  }

  // Terceiro: string direta (quase nunca acontece)
  if (typeof error === "string") {
    return error;
  }

  return fallback;
}

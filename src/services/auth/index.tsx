import { api } from "@/config/api";
import type { SigninResponse, SigninBody } from "./auth";

export async function signIn(data: SigninBody) {
  return api.post<SigninResponse>("/auth/sign-in", data);
}

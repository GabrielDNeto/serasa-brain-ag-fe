import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within a provider");

  return context;
}

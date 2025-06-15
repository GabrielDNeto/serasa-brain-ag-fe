import { CreateOrEditProducerContext } from "@/contexts/create-or-edit-producer";
import { useContext } from "react";

export function useCreateOrEditProducer() {
  const context = useContext(CreateOrEditProducerContext);

  if (!context)
    throw new Error("useCreateProducer must be used within a provider");

  return context;
}

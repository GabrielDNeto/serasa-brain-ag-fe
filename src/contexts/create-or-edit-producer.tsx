import type { Harvest } from "@/@types/harvest";
import type { Producer } from "@/@types/producer";
import { type FormInstance } from "antd";
import { createContext, useState } from "react";

type HarvestProps = Partial<Harvest>;

type CreateProducerContextProps = {
  form: FormInstance<Producer> | undefined;
  setForm: React.Dispatch<
    React.SetStateAction<FormInstance<Producer> | undefined>
  >;
  harvests: HarvestProps[];
  setHarvests: React.Dispatch<React.SetStateAction<HarvestProps[]>>;
};

export const CreateOrEditProducerContext = createContext(
  {} as CreateProducerContextProps,
);

export function CreateOrEditProducerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<FormInstance<Producer> | undefined>(
    undefined,
  );

  const [harvests, setHarvests] = useState<HarvestProps[]>([]);

  return (
    <CreateOrEditProducerContext.Provider
      value={{ form, setForm, harvests, setHarvests }}
    >
      {children}
    </CreateOrEditProducerContext.Provider>
  );
}

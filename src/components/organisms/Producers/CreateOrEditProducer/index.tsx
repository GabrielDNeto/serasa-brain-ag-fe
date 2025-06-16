import type { Producer } from "@/@types/producer";
import Loader from "@/components/atoms/Loader";
import { useCreateOrEditProducer } from "@/hooks/useCreateOrEditProducer";
import { getProducerById } from "@/services/producers";
import { getStates } from "@/services/utils";
import { formatCpfCnpj } from "@/utils/format";
import { useQuery } from "@tanstack/react-query";
import { Flex, Form } from "antd";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import ProducerInfo from "../ProducerInfo";
import PropertiesInfo from "../PropertiesInfo";

export default function CreateOrEditProducer() {
  const { id } = useParams();
  const { setForm } = useCreateOrEditProducer();

  const [form] = Form.useForm<Omit<Producer, "id">>();

  const { data: producerByIdData, isLoading: isProducerByIdLoading } = useQuery(
    {
      queryKey: ["producer", id],
      queryFn: () => getProducerById(Number(id) || 0),
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );

  const { data: statesData } = useQuery({
    queryKey: ["states"],
    queryFn: getStates,
    refetchOnWindowFocus: false,
  });

  const statesOptions = useMemo(
    () =>
      statesData?.data
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .map((state) => ({
          label: `${state.nome} (${state.sigla})`,
          value: state.sigla,
        })) || [],
    [statesData],
  );

  useEffect(() => {
    setForm(form);
  }, [form, setForm]);

  if (isProducerByIdLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "100%" }}>
        <Loader size={20} />
      </Flex>
    );
  }

  return (
    <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{
        name: producerByIdData?.data.name || undefined,
        document: producerByIdData?.data.document
          ? formatCpfCnpj(producerByIdData?.data.document)
          : undefined,
        city: producerByIdData?.data.city || undefined,
        state: producerByIdData?.data.state || undefined,
        properties: producerByIdData?.data.properties || [],
      }}
    >
      <Flex vertical gap="1.5rem">
        <ProducerInfo statesOptions={statesOptions} />
        <PropertiesInfo statesOptions={statesOptions} />
      </Flex>
    </Form>
  );
}

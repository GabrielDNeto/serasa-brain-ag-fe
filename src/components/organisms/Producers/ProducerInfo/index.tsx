import MaskedInput from "@/components/atoms/Forms/MaskedInput";
import { formatCpfCnpj } from "@/utils/format";
import { Card, Flex, Form, Input, Select } from "antd";
import { cnpj, cpf } from "cpf-cnpj-validator";

type ProducerInfoProps = {
  statesOptions: { label: string; value: string }[];
};

export default function ProducerInfo({ statesOptions }: ProducerInfoProps) {
  return (
    <>
      <Card title={<h2>Informações do Produtor</h2>}>
        <Flex gap="1rem">
          <Form.Item
            name="name"
            label="Nome do produtor"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Jhon Doe" />
          </Form.Item>

          <Form.Item
            name="document"
            label="CPF/CNPJ"
            rules={[
              { required: true, message: "Campo obrigatório" },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();

                  const numericValue = value.replace(/\D/g, "");

                  if (numericValue.length <= 11) {
                    return cpf.isValid(numericValue)
                      ? Promise.resolve()
                      : Promise.reject("CPF inválido");
                  } else {
                    return cnpj.isValid(numericValue)
                      ? Promise.resolve()
                      : Promise.reject("CNPJ inválido");
                  }
                },
              },
            ]}
          >
            <MaskedInput
              mask={formatCpfCnpj} // Ex: "123.456"
              placeholder="Digite no formato 123.456"
            />
          </Form.Item>

          <Form.Item
            name="city"
            label="Cidade"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="São Paulo" />
          </Form.Item>

          <Form.Item
            name="state"
            label="Estado (UF)"
            rules={[{ required: true, message: "Campo obrigatório" }]}
            wrapperCol={{ span: 24 }}
          >
            <Select
              showSearch
              placeholder="São Paulo"
              options={statesOptions}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{
                width: "18rem",
              }}
            />
          </Form.Item>
        </Flex>
      </Card>
    </>
  );
}

import { Button, Card, Divider, Flex, Form, Input, Select } from "antd";
import { Plus, Trash } from "lucide-react";
import PropertyHarvests from "../PropertyHarvests";

type PropertiesProps = {
  statesOptions: { label: string; value: string }[];
};

export default function PropertiesInfo({ statesOptions }: PropertiesProps) {
  return (
    <Form.List name="properties">
      {(fields, { add, remove }) => (
        <>
          <Card
            title={
              <Flex justify="space-between" align="center">
                <h2>Propriedades</h2>
                <Button type="primary" onClick={() => add()}>
                  <Plus size={18} />
                  Adicionar Propriedade
                </Button>
              </Flex>
            }
          >
            <Flex vertical gap="1.5rem">
              {fields?.map(({ key, name, ...restField }) => (
                <>
                  {key >= 1 && <Divider />}
                  <Flex gap="1.5rem" align="center" key={key}>
                    <Flex vertical gap="1rem">
                      <Flex key={key} gap="1rem">
                        <Form.Item
                          {...restField}
                          name={[name, "name"]}
                          label="Nome da propriedade"
                          rules={[
                            {
                              required: true,
                              message: "Informe o nome da fazenda",
                            },
                          ]}
                        >
                          <Input placeholder="Sítio São João" />
                        </Form.Item>

                        <Form.Item
                          name={[name, "city"]}
                          label="Cidade"
                          rules={[
                            { required: true, message: "Campo obrigatório" },
                          ]}
                        >
                          <Input placeholder="São Paulo" />
                        </Form.Item>

                        <Form.Item
                          name={[name, "state"]}
                          label="Estado (UF)"
                          rules={[
                            { required: true, message: "Campo obrigatório" },
                          ]}
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

                        <Form.Item
                          {...restField}
                          name={[name, "totalArea"]}
                          label="Área total (ha)"
                          style={{ maxWidth: "8.75rem" }}
                          rules={[
                            { required: true, message: "Informe o tamanho" },
                          ]}
                        >
                          <Input placeholder="Ex: 100" />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "arableArea"]}
                          label="Agricultável (ha)"
                          style={{ maxWidth: "8.75rem" }}
                          rules={[
                            { required: true, message: "Informe o tamanho" },
                          ]}
                        >
                          <Input placeholder="Ex: 70" />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "vegetationArea"]}
                          label="Vegetação (ha)"
                          style={{ maxWidth: "8.75rem" }}
                          rules={[
                            { required: true, message: "Informe o tamanho" },
                          ]}
                        >
                          <Input placeholder="Ex: 30" />
                        </Form.Item>
                      </Flex>

                      <PropertyHarvests property={name} />
                    </Flex>

                    <Button type="text" onClick={() => remove(name)}>
                      <Trash size={18} />
                    </Button>
                  </Flex>
                </>
              ))}
            </Flex>
          </Card>
        </>
      )}
    </Form.List>
  );
}

import TotalArea from "@/components/atoms/Producers/Properties/TotalArea";
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
                <Button type="default" onClick={() => add()}>
                  <Plus size={18} />
                  Adicionar Propriedade
                </Button>
              </Flex>
            }
          >
            <Flex vertical gap="1.5rem">
              {fields?.map(({ key, name, ...restField }) => (
                <div key={key}>
                  {key >= 1 && <Divider />}
                  <Flex gap="1.5rem" align="center">
                    <Flex vertical gap="1rem">
                      <div>
                        <Flex key={key} gap="1rem" align="center">
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
                            />
                          </Form.Item>

                          <Form.Item
                            {...restField}
                            name={[name, "arableArea"]}
                            label="Área agricultável (ha)"
                            style={{ maxWidth: "11rem" }}
                            normalize={(value) => value && Number(value)}
                            rules={[
                              { required: true, message: "Informe o tamanho" },
                            ]}
                          >
                            <Input placeholder="Ex: 70" type="number" />
                          </Form.Item>

                          <Form.Item
                            {...restField}
                            name={[name, "vegetationArea"]}
                            label="Área vegetação (ha)"
                            normalize={(value) => value && Number(value)}
                            style={{ maxWidth: "10rem" }}
                            rules={[
                              { required: true, message: "Informe o tamanho" },
                            ]}
                          >
                            <Input placeholder="Ex: 30" type="number" />
                          </Form.Item>
                        </Flex>
                        <TotalArea property={name} />
                      </div>

                      <PropertyHarvests property={name} />
                    </Flex>

                    <Button type="text" onClick={() => remove(name)}>
                      <Trash size={18} />
                    </Button>
                  </Flex>
                </div>
              ))}
            </Flex>
          </Card>
        </>
      )}
    </Form.List>
  );
}

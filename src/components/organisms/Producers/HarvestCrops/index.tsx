import { Button, Flex, Form, Input } from "antd";
import { MinusCircle } from "lucide-react";

export default function HarvestCrops({ harvest }: { harvest: number }) {
  return (
    <Form.List name={[harvest, "crops"]}>
      {(fields, { remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex gap="1rem" align="center" key={key}>
              <Button type="text" onClick={() => remove(name)}>
                <MinusCircle size={18} />
              </Button>

              <Form.Item
                {...restField}
                name={[name, "name"]}
                label="Nome"
                rules={[{ required: true, message: "Informe o ano" }]}
              >
                <Input placeholder="Sítio São João" />
              </Form.Item>
            </Flex>
          ))}
        </>
      )}
    </Form.List>
  );
}

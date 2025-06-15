import { Flex, Form } from "antd";

export default function TotalArea({ property }: { property: number }) {
  const watchVegetationArea =
    Form.useWatch(["properties", property, "vegetationArea"]) || 0;
  const watchArableArea =
    Form.useWatch(["properties", property, "arableArea"]) || 0;

  return (
    <Flex gap="0.5rem">
      <b>Área total:</b>
      {`${Number(watchArableArea) + Number(watchVegetationArea)} (ha)`}
    </Flex>
  );
}

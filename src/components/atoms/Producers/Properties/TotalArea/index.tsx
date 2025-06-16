import { useCreateOrEditProducer } from "@/hooks/useCreateOrEditProducer";
import { Flex, Form } from "antd";
import { useCallback, useEffect } from "react";

export default function TotalArea({ property }: { property: number }) {
  const { form } = useCreateOrEditProducer();

  const watchVegetationArea =
    Form.useWatch(["properties", property, "vegetationArea"]) || 0;
  const watchArableArea =
    Form.useWatch(["properties", property, "arableArea"]) || 0;

  const handleChangeTotalValue = useCallback(() => {
    form?.setFieldValue(
      ["properties", property, "totalArea"],
      Number(watchArableArea) + Number(watchVegetationArea),
    );
  }, [form, property, watchArableArea, watchVegetationArea]);

  useEffect(() => {
    handleChangeTotalValue();
  }, [handleChangeTotalValue]);

  return (
    <Flex gap="0.5rem">
      <b>Área total:</b>
      {`${Number(watchArableArea) + Number(watchVegetationArea)} (ha)`}
    </Flex>
  );
}

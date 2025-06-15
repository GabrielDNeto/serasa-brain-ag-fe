import type { Harvest } from "@/@types/harvest";
import { useCreateOrEditProducer } from "@/hooks/useCreateOrEditProducer";
import { serialize } from "@/utils/serializer";
import { Button, Flex, Form, Input, Modal } from "antd";
import { MinusCircle, Plus, Trash } from "lucide-react";
import { useCallback, useEffect, useMemo } from "react";

type HarvestCropsModalProps = {
  open: boolean;
  property: number;
  selectedHarvest: Partial<Harvest> | null;
  handleCloseModal: () => void;
};

export default function HarvestCropsModal({
  open,
  property,
  selectedHarvest,
  handleCloseModal,
}: HarvestCropsModalProps) {
  const { form } = useCreateOrEditProducer();

  const harvests: Harvest[] = useMemo(
    () => form?.getFieldValue(["properties", property, "harvests"]) || [],
    [form, property],
  );

  const selectedHarvestIndex = useMemo(
    () =>
      harvests.findIndex((harvest) => harvest.year === selectedHarvest?.year),
    [harvests, selectedHarvest?.year],
  );

  const handleRemoveHarvest = useCallback(() => {
    form?.setFieldValue(
      ["properties", property, "harvests"],
      harvests.filter((_, index) => index !== selectedHarvestIndex),
    );

    handleCloseModal();
  }, [form, property, harvests, handleCloseModal, selectedHarvestIndex]);

  const handleSaveHarvest = useCallback(() => {
    const harvest: Partial<Harvest> = form?.getFieldValue([
      "properties",
      property,
      "harvests",
      selectedHarvestIndex,
    ]);

    const hasCrops = !!serialize<Partial<Harvest>>(harvest).crops?.length;

    if (harvest && hasCrops) {
      const properties = form?.getFieldValue("properties") || [];
      properties[property] = {
        ...properties[property],
        harvests:
          harvests.map((h, i) =>
            i === selectedHarvestIndex
              ? serialize<Partial<Harvest>>(harvest)
              : h,
          ) || [],
      };

      form?.setFieldsValue({
        properties,
      });
    } else {
      return handleRemoveHarvest();
    }

    handleCloseModal();
  }, [
    form,
    handleCloseModal,
    handleRemoveHarvest,
    harvests,
    property,
    selectedHarvestIndex,
  ]);

  const yearValidation = [
    {
      required: true,
      message: "Ano da safra é obrigatório",
    },
    ({
      getFieldValue,
    }: {
      getFieldValue: (namePath: (string | number)[]) => unknown;
    }) => ({
      validator(_: unknown, value: unknown) {
        if (!value) return Promise.resolve();

        const harvests = getFieldValue(["properties", property, "harvests"]);

        const isDuplicate = (Array.isArray(harvests) ? harvests : [])?.some(
          (harvest: Harvest, index: number) => {
            return (
              index !== selectedHarvestIndex &&
              String(harvest.year) === String(value)
            );
          },
        );

        if (isDuplicate) {
          return Promise.reject(
            new Error("Ano da safra já existe para essa propriedade"),
          );
        }

        return Promise.resolve();
      },
    }),
  ];

  useEffect(() => {
    console.log("teste", harvests);
  }, [harvests]);

  return (
    <Modal
      open={open}
      title={selectedHarvest?.id ? "Editar Safra" : "Nova Safra"}
      onCancel={handleCloseModal}
      footer={() => (
        <Flex justify="space-between" style={{ marginTop: "2rem" }}>
          <Button type="text" onClick={handleRemoveHarvest}>
            <Trash size={18} />
          </Button>
          <Button type="primary" onClick={handleSaveHarvest}>
            Salvar
          </Button>
        </Flex>
      )}
    >
      {selectedHarvest && (
        <>
          <Form.Item
            name={[property, "harvests", selectedHarvestIndex, "year"]}
            label="Ano da safra"
            labelAlign="left"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            rules={yearValidation}
          >
            <Input type="number" />
          </Form.Item>
          <Form.List
            name={[property, "harvests", selectedHarvestIndex, "crops"]}
          >
            {(fields, { add, remove }) => (
              <Flex vertical gap="1.5rem">
                <h3>Culturas</h3>

                <Flex vertical gap="1rem">
                  {fields.map(({ key, name, ...restField }) => (
                    <Flex align="center" key={key}>
                      <Button
                        size="small"
                        type="text"
                        onClick={() => remove(name)}
                      >
                        <MinusCircle size={16} />
                      </Button>
                      <Form.Item
                        name={[name, "name"]}
                        style={{ margin: 0 }}
                        {...restField}
                      >
                        <Input />
                      </Form.Item>
                    </Flex>
                  ))}
                </Flex>

                <Button type="dashed" onClick={() => add()}>
                  <Plus size={16} />
                  Adicionar Cultura
                </Button>
              </Flex>
            )}
          </Form.List>
        </>
      )}
    </Modal>
  );
}

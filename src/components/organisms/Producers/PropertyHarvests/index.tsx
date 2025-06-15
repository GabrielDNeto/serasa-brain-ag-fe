import type { Harvest } from "@/@types/harvest";
import type { Property } from "@/@types/property";
import { useCreateOrEditProducer } from "@/hooks/useCreateOrEditProducer";
import { Button, Divider, Flex, Form } from "antd";
import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import HarvestCropsModal from "../../Modals/HarvestCrops";
import { serialize } from "@/utils/serializer";

export default function PropertyHarvests({ property }: { property: number }) {
  const { form } = useCreateOrEditProducer();

  const watchHarvests =
    (Form.useWatch(["properties", property, "harvests"], form) as Harvest[]) ||
    [];

  const harvests: Harvest[] = watchHarvests;

  const [selectedHarvest, setSelectedHarvest] =
    useState<Partial<Harvest> | null>(null);
  const [harvestModalOpen, setHarvestModalOpen] = useState(false);

  const handleEditHarvest = (harvest: Partial<Harvest>) => {
    setSelectedHarvest(harvest);
    setHarvestModalOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setSelectedHarvest(null);
    setHarvestModalOpen((prev) => !prev);
  };

  const handleAddHarvest = useCallback(() => {
    if (harvests) {
      const lastHarvest = harvests[harvests.length - 1];

      let newHarvest: Partial<Harvest> = {};

      if (lastHarvest?.propertyId) {
        newHarvest = {
          year: lastHarvest?.year
            ? lastHarvest.year + 1
            : new Date().getFullYear(),
          propertyId: lastHarvest.propertyId,
          crops: [],
        };
      } else {
        newHarvest = {
          year: lastHarvest?.year
            ? lastHarvest.year + 1
            : new Date().getFullYear(),
          crops: [],
        };
      }

      const updatedHarvests = [...harvests, newHarvest];

      form?.setFieldsValue({
        properties: form
          .getFieldValue("properties")
          ?.map((prop: Property, index: number) =>
            index === property
              ? {
                  ...prop,
                  harvests: updatedHarvests,
                }
              : prop,
          ),
      });
      setSelectedHarvest(newHarvest);
      setHarvestModalOpen((prev) => !prev);
    }
  }, [form, harvests, property]);

  return (
    <>
      <Flex gap="1rem" align="center">
        <h3>Safras</h3>

        <Button type="dashed" onClick={handleAddHarvest}>
          <Plus size={16} />
          Adicionar Safra
        </Button>
      </Flex>
      <Flex gap="1rem" wrap style={{ marginTop: "1.5rem" }}>
        {harvests?.map((harvest, index) => (
          <>
            {!!serialize(harvest).crops.length && (
              <Button key={index} onClick={() => handleEditHarvest(harvest)}>
                <Flex align="center" gap="0.5rem">
                  <b>{harvest.year}</b>
                  <Divider type="vertical" />
                  {serialize<Partial<Harvest>>(harvest)
                    .crops?.map((crop) => crop?.name)
                    .join(", ")}
                </Flex>
              </Button>
            )}
          </>
        ))}
      </Flex>

      {harvestModalOpen && (
        <HarvestCropsModal
          open={harvestModalOpen}
          handleCloseModal={handleCloseModal}
          property={property}
          selectedHarvest={selectedHarvest}
        />
      )}
    </>
  );
}

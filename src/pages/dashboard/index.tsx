import Container from "@/components/organisms/Container";
import { getAllProperties } from "@/services/properties";
import { ContentWrapper, StyledSection } from "@/styles/global";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useMemo } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { data: propertiesData } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });

  const totalProperties = useMemo(
    () => propertiesData?.data.length,
    [propertiesData],
  );

  const totalPropertiesArea = useMemo(
    () => propertiesData?.data.reduce((sum, f) => sum + f.totalArea, 0),
    [propertiesData],
  );

  const propertiesByState = useMemo(
    () =>
      propertiesData?.data.reduce(
        (acc, farm) => {
          acc[farm.state] = (acc[farm.state] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      ) || {},
    [propertiesData],
  );

  const cropCount = useMemo(
    () =>
      (propertiesData?.data ?? [])
        .flatMap((p) => p.harvests ?? [])
        .flatMap((h) => h.crops ?? [])
        .reduce<Record<string, number>>((acc, crop) => {
          acc[crop.name] = (acc[crop.name] ?? 0) + 1;
          return acc;
        }, {}),
    [propertiesData],
  );

  const totalArable = propertiesData?.data.reduce(
    (sum, f) => sum + f.arableArea,
    0,
  );
  const totalVegetation = propertiesData?.data.reduce(
    (sum, f) => sum + f.vegetationArea,
    0,
  );

  return (
    <StyledSection>
      <Container>
        <Flex vertical gap="1.5rem" style={{ height: "100%" }}>
          <h1>Dashboard</h1>
          <ContentWrapper>
            <Flex vertical gap="1.5rem">
              <Card>
                <Flex gap="1.5rem" align="center">
                  <h3>Propriedades cadastradas: </h3>
                  <h2>{totalProperties}</h2>
                </Flex>
                <Flex gap="1.5rem" align="center">
                  <h3>Área total cadastrada: </h3>
                  <h2>{totalPropertiesArea}</h2>
                </Flex>
              </Card>

              <Card>
                <Flex align="start" justify="space-around">
                  <Flex vertical gap="1.5rem" align="center" justify="center">
                    <h3 className="text-lg font-medium mb-2">
                      Propriedades por estado
                    </h3>
                    <Pie
                      data={{
                        labels: Object.keys(propertiesByState),
                        datasets: [
                          {
                            label: "Fazendas",
                            data: Object.values(propertiesByState),
                            backgroundColor: [
                              "#34d399",
                              "#60a5fa",
                              "#fbbf24",
                              "#f87171",
                              "#c084fc",
                            ],
                          },
                        ],
                      }}
                    />
                  </Flex>
                  <Flex vertical gap="1.5rem" align="center" justify="center">
                    <h3 className="text-lg font-medium mb-2">
                      Culturas Plantadas
                    </h3>
                    <Pie
                      data={{
                        labels: Object.keys(cropCount),
                        datasets: [
                          {
                            label: "Quantidade",
                            data: Object.values(cropCount),
                            backgroundColor: [
                              "#fcd34d",
                              "#6ee7b7",
                              "#a78bfa",
                              "#fb7185",
                              "#38bdf8",
                            ],
                          },
                        ],
                      }}
                    />
                  </Flex>

                  <Flex vertical gap="1.5rem" align="center" justify="center">
                    <h3 className="text-lg font-medium mb-2">Uso do Solo</h3>
                    <Pie
                      data={{
                        labels: ["Agricultável", "Vegetação"],
                        datasets: [
                          {
                            label: "Uso do Solo",
                            data: [totalArable, totalVegetation],
                            backgroundColor: ["#86efac", "#facc15"],
                          },
                        ],
                      }}
                    />
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </ContentWrapper>
        </Flex>
      </Container>
    </StyledSection>
  );
}

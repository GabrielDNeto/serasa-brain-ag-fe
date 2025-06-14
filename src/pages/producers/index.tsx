import type { Pagination } from "@/@types/pagination";
import type { Producer } from "@/@types/producer";
import type { Column } from "@/@types/table";
import Button from "@/components/atoms/Button";
import Container from "@/components/organisms/Container";
import { DataTable } from "@/components/organisms/Table";
import { getProducersPaginated } from "@/services/producers";
import { FlexBetween } from "@/styles/global";
import { useQuery } from "@tanstack/react-query";
import { cnpj, cpf } from "cpf-cnpj-validator";
import dayjs from "dayjs";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ContentWrapper, StyledSection, TableWrapper } from "./styles";

export default function Producers() {
  const [pagination, setPagination] = useState<Pagination>({
    pageNumber: 1,
    pageSize: 10,
  });

  const { data: producersData } = useQuery({
    queryKey: ["producers"],
    queryFn: () => getProducersPaginated(pagination),
  });

  const columns: Column<Producer>[] = [
    { header: "Name", accessor: "name" },
    {
      header: "CPF/CNPJ",
      accessor: "document",
      render: (val) =>
        val.toString().length >= 14
          ? cnpj.format(val.toString())
          : cpf.format(val.toString()),
    },
    { header: "Cidade", accessor: "city" },
    { header: "Estado(UF)", accessor: "state" },
    {
      header: "Última atualização",
      accessor: "updatedAt",
      render: (val) => dayjs(val.toString()).format("DD/MM/YYYY"),
    },
    {
      header: "Ações",
      accessor: "id",
      render: (val) => <span>{val.toString()}</span>,
    },
  ] as const;

  return (
    <StyledSection>
      <Container>
        <ContentWrapper>
          <FlexBetween>
            <h1>Produtores</h1>
            <Button>
              <Plus />
              Adicionar Produtor
            </Button>
          </FlexBetween>

          <TableWrapper>
            <DataTable
              columns={columns}
              data={producersData?.data?.items || []}
            />
          </TableWrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

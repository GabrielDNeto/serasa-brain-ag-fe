import type { Pagination } from "@/@types/pagination";
import type { Producer } from "@/@types/producer";
import Container from "@/components/organisms/Container";
import { deleteProducer, getProducersPaginated } from "@/services/producers";
import { FlexBetween } from "@/styles/global";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dropdown,
  Flex,
  Table,
  type MenuProps,
  type TableProps,
} from "antd";
import { cnpj, cpf } from "cpf-cnpj-validator";
import dayjs from "dayjs";
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { ContentWrapper, StyledSection, TableWrapper } from "./styles";
import { Link, useNavigate } from "react-router";
import { APP_ROUTES } from "@/config/routes/constants";

export default function Producers() {
  const [pagination, setPagination] = useState<Pagination>({
    pageNumber: 1,
    pageSize: 10,
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { data: producersData } = useQuery({
    queryKey: ["producers", pagination],
    queryFn: () => getProducersPaginated(pagination),
  });

  const deleteProducerMutation = useMutation({
    mutationFn: deleteProducer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["producers"] });
    },
  });

  const columns: TableProps<Producer>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "CPF/CNPJ",
      dataIndex: "document",
      key: "document",
      render: (doc: string) =>
        doc.length >= 14 ? cnpj.format(doc) : cpf.format(doc),
    },
    {
      title: "Cidade",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Estado (UF)",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Última atualização",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt: string) => dayjs(updatedAt).format("DD/MM/YYYY"),
    },
    {
      title: "Ações",
      dataIndex: "id",
      key: "id",
      render: (id: number) => {
        const items: MenuProps["items"] = [
          {
            key: "1",
            label: (
              <Link to={`${APP_ROUTES.private.producers.root}/${id}`}>
                <Flex gap="0.5rem" align="center">
                  <Edit size={16} />
                  Editar
                </Flex>
              </Link>
            ),
          },
          {
            key: "2",
            label: (
              <Flex gap="0.5rem" align="center">
                <Trash size={16} />
                Excluir
              </Flex>
            ),
            onClick: () => deleteProducerMutation.mutate(id),
          },
        ];
        return (
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button type="text" size="small">
              <MoreHorizontal size={20} />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <StyledSection>
      <Container>
        <ContentWrapper>
          <FlexBetween>
            <h1>Produtores</h1>
            <Button
              type="primary"
              onClick={() => navigate(APP_ROUTES.private.producers.create)}
            >
              <Plus />
              Adicionar Produtor
            </Button>
          </FlexBetween>

          <TableWrapper>
            <Table<Producer>
              columns={columns}
              dataSource={producersData?.data.items}
              rowKey="id"
              pagination={{
                pageSize: pagination.pageSize,
                current: pagination.pageNumber,
                total: producersData?.data.meta.total,
                onChange: (pageNumber, pageSize) => {
                  setPagination({ pageNumber, pageSize });
                },
              }}
            />
          </TableWrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

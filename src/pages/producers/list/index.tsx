import type { Pagination } from "@/@types/pagination";
import type { Producer } from "@/@types/producer";
import Container from "@/components/organisms/Container";
import { APP_ROUTES } from "@/config/routes/constants";
import { deleteProducer, getProducersPaginated } from "@/services/producers";
import { StyledSection } from "@/styles/global";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dropdown,
  Flex,
  Input,
  Table,
  type MenuProps,
  type TableProps,
} from "antd";
import { cnpj, cpf } from "cpf-cnpj-validator";
import dayjs from "dayjs";
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ContentWrapper, TableWrapper } from "./styles";
import { Helmet } from "react-helmet";

export default function Producers() {
  const [pagination, setPagination] = useState<Pagination>({
    pageNumber: 1,
    pageSize: 10,
  });

  const [search, setSearch] = useState("");

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { data: producersData } = useQuery({
    queryKey: ["producers", pagination, search],
    queryFn: () => getProducersPaginated(pagination, search),
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
    <>
      <Helmet>
        <title>Brain Ag | Produtores</title>
        <meta
          name="description"
          content="Visualize todos os produtores cadastrados"
        />
      </Helmet>
      <StyledSection>
        <Container>
          <ContentWrapper>
            <h1>Produtores</h1>

            <Flex justify="space-between" align="center">
              <Input.Search
                allowClear
                onSearch={(val) => setSearch(val)}
                placeholder="Busque por nome ou documento"
                style={{ maxWidth: "18rem" }}
              />

              <Button
                type="primary"
                onClick={() => navigate(APP_ROUTES.private.producers.create)}
              >
                <Plus />
                Adicionar Produtor
              </Button>
            </Flex>

            <TableWrapper>
              <Table<Producer>
                columns={columns}
                dataSource={producersData?.data.items}
                rowKey="id"
                scroll={{
                  y: 560,
                }}
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
    </>
  );
}

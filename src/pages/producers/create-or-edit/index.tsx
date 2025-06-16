import Container from "@/components/organisms/Container";
import CreateOrEditProducer from "@/components/organisms/Producers/CreateOrEditProducer";
import { APP_ROUTES } from "@/config/routes/constants";
import { useCreateOrEditProducer } from "@/hooks/useCreateOrEditProducer";
import { createProducer, updateProducer } from "@/services/producers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Tooltip } from "antd";
import { ArrowLeft, Check, UserPlus } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { ContentWrapper, StyledSection, Wrapper } from "./styles";
import Loader from "@/components/atoms/Loader";

export default function CreateOrEditProducerPage() {
  const { id } = useParams();

  const { form } = useCreateOrEditProducer();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const createProducerMutation = useMutation({
    mutationFn: createProducer,
  });

  const updateProducerMutation = useMutation({
    mutationFn: updateProducer,
  });

  const handleCreateOrUpdateProducer = () => {
    form?.validateFields().then((valid) => {
      if (valid) {
        const data = form?.getFieldsValue();
        if (data) {
          if (id) {
            updateProducerMutation.mutate({ id: Number(id), ...data });
            queryClient.invalidateQueries({ queryKey: ["producer", id] });
          } else {
            createProducerMutation.mutate(data);
            form.resetFields();
          }
        }
      }
    });
  };

  const isLoading =
    updateProducerMutation.isPending || createProducerMutation.isPending;

  return (
    <StyledSection>
      <Container>
        <ContentWrapper>
          <Flex justify="space-between" align="center">
            <Flex gap="1rem">
              <Tooltip title="Voltar">
                <Button
                  type="default"
                  onClick={() => navigate(APP_ROUTES.private.producers.root)}
                >
                  <ArrowLeft size={20} />
                </Button>
              </Tooltip>
              <h1>{id ? "Editar Produtor" : "Adicionar Produtor"}</h1>
            </Flex>

            <Button type="primary" onClick={handleCreateOrUpdateProducer}>
              {isLoading && <Loader size={16} />}
              {!isLoading &&
                (id ? <Check size={18} /> : <UserPlus size={18} />)}
              {id ? "Salvar" : "Adicionar"}
            </Button>
          </Flex>

          <Wrapper>
            <CreateOrEditProducer />
          </Wrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

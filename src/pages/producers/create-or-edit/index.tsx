import Container from "@/components/organisms/Container";
import CreateOrEditProducer from "@/components/organisms/Producers/CreateOrEditProducer";
import { CreateOrEditProducerProvider } from "@/contexts/create-or-edit-producer";
import { Button, Flex, Tooltip } from "antd";
import { ArrowLeft, Check, UserPlus } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { ContentWrapper, StyledSection, Wrapper } from "./styles";
import { APP_ROUTES } from "@/config/routes/constants";

export default function CreateOrEditProducerPage() {
  const { id } = useParams();

  const navigate = useNavigate();

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

            <Button type="primary">
              {id ? <Check size={18} /> : <UserPlus size={18} />}
              {id ? "Salvar" : "Adicionar"}
            </Button>
          </Flex>

          <Wrapper>
            <CreateOrEditProducerProvider>
              <CreateOrEditProducer />
            </CreateOrEditProducerProvider>
          </Wrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

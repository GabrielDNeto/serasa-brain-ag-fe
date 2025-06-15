import Button from "@/components/atoms/Button";
import Container from "@/components/organisms/Container";
import CreateOrEditProducer from "@/components/organisms/Producers/CreateOrEditProducer";
import { CreateOrEditProducerProvider } from "@/contexts/create-or-edit-producer";
import { Flex } from "antd";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router";
import { ContentWrapper, StyledSection, Wrapper } from "./styles";

export default function CreateOrEditProducerPage() {
  const { id } = useParams();

  return (
    <StyledSection>
      <Container>
        <ContentWrapper>
          <Flex gap="1rem">
            <Button variant="ghost">
              <ArrowLeft size={20} />
            </Button>
            <h1>{id ? "Editar Produtor" : "Adicionar Produtor"}</h1>
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

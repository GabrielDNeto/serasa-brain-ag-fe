import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Forms/Input";
import FormLabel from "@/components/atoms/Forms/Label";
import Container from "@/components/organisms/Container";
import { Flex } from "@/styles/global";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { ContentWrapper, FormContent, StyledSection, Wrapper } from "./styles";

export default function CreateOrEditProducer() {
  const { id } = useParams();

  const form = useForm();

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
            <form>
              <FormContent>
                <div>
                  <div>
                    <FormLabel>Nome do produtor</FormLabel>
                    <Input placeholder="Jhon Doe" />
                  </div>

                  <div>
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <Input placeholder="Jhon Doe" />
                  </div>

                  <Flex gap="1rem">
                    <div>
                      <FormLabel>Cidade</FormLabel>
                      <Input placeholder="Jhon Doe" />
                    </div>

                    <div>
                      <FormLabel>Estado</FormLabel>
                      <Input placeholder="Jhon Doe" />
                    </div>
                  </Flex>
                </div>
                <div>
                  <div>
                    <FormLabel>Nome do produtor</FormLabel>
                    <Input placeholder="Jhon Doe" />
                  </div>
                </div>
              </FormContent>
            </form>
          </Wrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

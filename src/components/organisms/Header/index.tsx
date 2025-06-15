import Logo from "@/components/atoms/Logo";
import HeaderNavigation from "@/components/molecules/HeaderNavigation";
import { HeaderWrapper, StyledHeader } from "./styles";
import Container from "@/components/organisms/Container";
import { DoorOpen } from "lucide-react";
import { Button, Tooltip } from "antd";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderNavigation />
          <Tooltip title="Sair">
            <Button type="default">
              <DoorOpen />
            </Button>
          </Tooltip>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

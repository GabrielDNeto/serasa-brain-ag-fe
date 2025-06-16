import Logo from "@/components/atoms/Logo";
import HeaderNavigation from "@/components/molecules/HeaderNavigation";
import { HeaderWrapper, StyledHeader } from "./styles";
import Container from "@/components/organisms/Container";
import { DoorOpen } from "lucide-react";
import { Button, Tooltip } from "antd";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { handleLogout } = useAuth();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderNavigation />
          <Tooltip title="Sair">
            <Button type="text" onClick={handleLogout}>
              <DoorOpen color="white" />
            </Button>
          </Tooltip>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

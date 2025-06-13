import Logo from "@/components/atoms/Logo";
import HeaderNavigation from "@/components/molecules/HeaderNavigation";
import { HeaderWrapper, StyledHeader } from "./styles";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import { DoorOpen } from "lucide-react";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderNavigation />
          <Button variant="secondary">
            <DoorOpen />
          </Button>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

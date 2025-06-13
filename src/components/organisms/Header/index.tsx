import Logo from "@/components/atoms/Logo";
import HeaderNavigation from "@/components/molecules/HeaderNavigation";
import { StyledHeader } from "./styles";
import Container from "@/components/atoms/Container";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <HeaderNavigation />
      </Container>
    </StyledHeader>
  );
}

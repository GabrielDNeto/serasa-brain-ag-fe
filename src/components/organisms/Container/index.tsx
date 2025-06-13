import { StyledContainer } from "./styles";

export default function Container({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}

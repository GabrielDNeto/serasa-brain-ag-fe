import { StyledSpan } from "./styles";

export default function InputMessage({
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <StyledSpan>{children}</StyledSpan>;
}

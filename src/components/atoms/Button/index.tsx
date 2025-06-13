import { StyledButton } from "./styles";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export default function Button({ children, ...rest }: IButton) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

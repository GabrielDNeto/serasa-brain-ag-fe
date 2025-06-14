import { StyledButton } from "./styles";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "lg" | "sm";
}

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  ...rest
}: IButton) {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

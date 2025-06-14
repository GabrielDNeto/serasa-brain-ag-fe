import styled from "styled-components";
import type { IButton } from ".";

export const StyledButton = styled.button<IButton>`
  padding: ${({ size }) => (size === "lg" ? "0.5rem 1rem" : "0.25rem 0.5rem")};
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
  border: ${({ theme, variant }) =>
    variant === "outline" ? `1px solid ${theme.colors.zinc[300]}` : "none"};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return "#ccc";
      case "outline":
        return "transparent";
      case "destructive":
        return theme.colors.destructive;
      default:
        return theme.colors.zinc[800];
    }
  }};

  color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return "white";
      case "destructive":
        return "white";
      default:
        return theme.colors.zinc[900];
    }
  }};

  &:hover {
    opacity: ${({ variant }) => (variant === "outline" ? 1 : 0.8)};
    background-color: ${({ theme, variant }) =>
      variant === "outline" && theme.colors.zinc[200]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

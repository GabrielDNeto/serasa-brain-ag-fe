import styled from "styled-components";
import type { IButton } from ".";

export const StyledButton = styled.button<IButton>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return "#ccc";
      default:
        return theme.colors.zinc[800];
    }
  }};

  color: ${({ variant }) => (variant === "secondary" ? "#333" : "#fff")};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

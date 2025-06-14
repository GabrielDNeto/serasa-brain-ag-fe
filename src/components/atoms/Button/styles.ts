import styled from "styled-components";
import type { IButton } from ".";

export const StyledButton = styled.button<IButton>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
  border: none;
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

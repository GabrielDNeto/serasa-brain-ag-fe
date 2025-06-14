import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select<{ hasError: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.destructive : theme.colors.zinc[600]};
  background-color: white;
  appearance: none;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.destructive : theme.colors.zinc[600]};
  }

  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
    color: #9ca3af;
  }
`;

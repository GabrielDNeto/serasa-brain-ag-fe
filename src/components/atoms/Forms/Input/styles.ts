import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  haserror: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 2px solid;
  border-color: ${({ theme, haserror }) =>
    haserror === "true" ? theme.colors.destructive : theme.colors.zinc[200]};
  outline: none;

  &::placeholder {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &:focus {
    border-color: ${({ theme, haserror }) =>
      haserror === "true" ? theme.colors.destructive : theme.colors.zinc[600]};
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  font-size: 0.9rem;
  color: #555;
`;

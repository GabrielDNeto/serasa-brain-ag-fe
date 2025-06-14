import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f2f2f2;
    color: ${({ theme }) => theme.colors.zinc[800]};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  input {
    &:focus, &:hover {
      border-color: ${({ theme }) => theme.colors.zinc[800]} !important;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1) !important;
    }
  }

`;

export const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type FlexProps = {
  gap: string;
};

export const Flex = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

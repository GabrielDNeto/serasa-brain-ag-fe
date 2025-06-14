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
`;

export const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

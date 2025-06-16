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

  :where(.css-dev-only-do-not-override-1ebbrk1).ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: white
  }

`;

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  overflow-y: auto;
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.zinc[800]};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

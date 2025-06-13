import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  li {
    color: white;

    a {
      padding: 0.5rem;
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

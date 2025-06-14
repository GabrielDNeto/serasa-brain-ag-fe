import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: white;
    padding: 3rem 1.5rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 25rem;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    h1 {
      text-align: center;
    }

    form {
      margin-top: 2rem;
      width: 100%;
      max-width: 18rem;

      button {
        width: 100%;
        margin-top: 1.5rem;
      }
    }
  }
`;

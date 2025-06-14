import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  overflow-y: auto;
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;

  & > div {
    width: 50%;
  }
`;

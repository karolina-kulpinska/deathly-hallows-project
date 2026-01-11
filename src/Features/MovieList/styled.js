import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 56px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 324px); 
  gap: 24px; 
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StyledHeader = styled.h1`
  grid-column: 1 / -1;
  font-weight: 600;
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
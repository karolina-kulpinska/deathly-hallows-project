import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StyledHeader = styled.h1`
  grid-column: 1 / -1;
  font-weight: 600;
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;
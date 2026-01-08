import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
    padding: 0 16px;
  }
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;
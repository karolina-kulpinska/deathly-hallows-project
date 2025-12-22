import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin: 56px 0 24px 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px 0 12px 0;
    font-size: 18px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMax}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) =>theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const PeopleListCard = styled.article`
  display: block;
  max-height: 100%;
  overflow: hidden;
`;
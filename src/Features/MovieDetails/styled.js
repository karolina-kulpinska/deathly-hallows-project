import styled from "styled-components";

export const Page = styled.main`
  max-width: 1368px;
  margin: 56px auto 103px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto 40px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
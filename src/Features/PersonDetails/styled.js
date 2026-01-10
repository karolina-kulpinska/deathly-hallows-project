import styled from "styled-components";

export const Content = styled.div`
  max-width: 1368px;
  margin: 56px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto;
    gap: 21px;
  }
`;

export const Wrapper = styled.article`
  width: 100%;
  min-height: 644px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 24px 40px; 
  grid-template-areas: 
    "photo data"
    "photo biography";

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: 365px;
    padding: 16px;
    gap: 16px; 
    grid-template-areas: 
      "photo data"
      "biography biography";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }
`;

export const Photo = styled.img`
  grid-area: photo;
  width: 399px;
  height: 564px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 116px;
    height: 163px;
  }
`;

export const Data = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  gap: 24px; 
  padding: 8px 0; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    padding: 0;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
    flex-wrap: wrap;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.waterloo};
  display: inline-block; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    
    ${({ $birth }) => $birth && `
      font-size: 0;
      &::before {
        content: "Birth: ";
        font-size: 12px;
      }
    `}
  }
`;

export const Info = styled.span`
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Biography = styled.p`
  grid-area: biography;
  font-size: 20px;
  line-height: 1.6;
  margin: 0; 
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: 1.6;
    margin-top: 0;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 64px 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin: 21px 0 12px;
  }
`;

export const MovieTitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const BirthSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;
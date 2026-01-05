import styled from "styled-components";

export const Page = styled.main`
  max-width: 1368px;
  margin: 56px auto 103px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto 40px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 64px 0 32px 0; 
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin: 24px 0 12px 0;
  }
`;

export const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeroBackdrop = styled.div`
  position: relative;
  max-width: 1368px;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ $url }) => `url(https://image.tmdb.org/t/p/original${$url})`} center/cover no-repeat;
  
  box-shadow: 
    inset 0 0 80px 80px black,
    inset 0 -150px 100px -20px black; 
    
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 56px 0;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const StatusText = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 64px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const MovieInfo = styled.section`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin-bottom: 64px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    gap: 16px;
    grid-template-columns: auto 1fr;
    margin-bottom: 24px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin-bottom: 64px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const MovieImage = styled.img`
  width: 312px;
  aspect-ratio: 2 / 3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
  }
`;

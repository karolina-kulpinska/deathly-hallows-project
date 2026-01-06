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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px 56px;
  margin: 0 auto;
  
  box-shadow: 
    inset 0 0 80px 80px black,
    inset 0 -150px 100px -20px black; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px 8px; 
  }
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
  margin: 24px 0 0 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin: 16px 0 0 0;
  }
`;

export const StatusText = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 64px;
  color: ${({ theme }) => theme.color.woodsmoke};
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
    display: block;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px;
    display: block;
  }
`;

export const MovieImage = styled.img`
  width: 312px;
  aspect-ratio: 2 / 3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    float: left;
    margin-right: 16px;
    margin-bottom: 8px;
  }
`;

export const MovieYear = styled.div`
  font-size: 22px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const PropertyName = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const PropertyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
   margin: 10px 0 12px 0;
  }
`;

export const Genre = styled.div`
  background: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 0;
    gap: 8px;
  }
`;

export const StarIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.color.candlelight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const MaxRate = styled.span`
  font-size: 14px;
  align-self: flex-end;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
  align-self: flex-end;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const PeopleList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 12px;
  }
`;

export const HeroRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
  }
`;

export const HeroScore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeroRate = styled.span`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const HeroMaxRate = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const HeroVotes = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    color: ${({ theme }) => theme.color.silver};
    margin-left: 8px;
  }
`;

export const HeroStar = styled(StarIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;
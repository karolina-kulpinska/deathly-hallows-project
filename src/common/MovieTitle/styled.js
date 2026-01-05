import styled from "styled-components";
import { Link } from "react-router-dom";

//Style dodałam dla przykładu, poprawimy je zgodnie z projektem z Figmy

export const Wrapper = styled(Link)`
  text-decoration: none; 
  color: inherit;
  background: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  border-radius: 5px;
  transition: transform 0.3s ease;
  height: 100%;
  cursor: pointer;

&:hover {
    transform: scale(1.02);
  }

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    gap: 16px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.silver};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px; 
    height: 169px;
  }

  & svg {
    width: 50%;
    height: auto;
    max-width: 120px;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 0; 
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    margin-top: 8px; 
    align-self: flex-start;
  }
`;

export const StarIcon = styled.svg.attrs({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const StarPath = styled.path.attrs({
  d: "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
})`
  fill: ${({ theme }) => theme.color.candlelight};
  `;

export const Rate = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    }
`;

export const Votes = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const GenresWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0;
`;

export const GenreTag = styled.div`
    background: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 4px 8px;
        font-size: 10px;
    }
`;
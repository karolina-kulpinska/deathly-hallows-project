import styled from "styled-components";
import { Link } from "react-router-dom";

//Style dodałam dla przykładu, poprawimy je zgodnie z projektem z Figmy

export const Wrapper = styled(Link)`
  text-decoration: none; 
  color: inherit;
  background: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: auto 1fr; 
    padding: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px; 
}
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  text-align: left;
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
  aspect-ratio: 114 / 169;
  border-radius: 5px;
  overflow: hidden;
  background-color: #c4c4c4;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
  }
`;

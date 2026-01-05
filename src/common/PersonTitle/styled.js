import styled from "styled-components";

//Style dodałam dla przykładu, poprawimy je zgodnie z projektem z Figmy

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-height: 339px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03); 
  }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px; 
    min-height: auto;
  }
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px; 
  }
`;

export const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 177 / 231;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.silver};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

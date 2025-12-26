import styled from "styled-components";

//Style dodałam dla przykładu, poprawimy je zgodnie z projektem z Figmy

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 208px;
  min-height: 339px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03); 
  }
`;

export const Image = styled.img`
  width: 176px;
  height: 231px; 
  object-fit: cover; 
  border-radius: 5px;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
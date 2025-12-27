import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 40px 0;
  width: 100%; 
  grid-column: 1 / -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    margin: 32px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.pattensBlue || "#D6E4FF"};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.woodsmoke};
  transition: filter 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    cursor: not-allowed;
   color: ${({ theme }) => theme.color.waterloo};

   svg path {
      fill: ${({ theme }) => theme.color.waterloo};
    }
  }

  &:hover:not(:disabled) {
    filter: brightness(95%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    margin: 0 2px;
  }
`;

export const Number = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
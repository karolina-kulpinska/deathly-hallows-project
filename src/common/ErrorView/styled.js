import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 100px;
  }
`;

export const ErrorHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  transition: 0.3s;
  
  /* Poprawka: kolor tła z theme.js */
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};

  /* Poprawka: kolor hover z theme.js */
  &:hover {
    background-color: ${({ theme }) => theme.color.dodgerBlue};
  }

  &:active {
    filter: brightness(110%);
  }
`;
import styled from "styled-components";
import { ReactComponent as Danger } from "./Danger.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 100px;
  }
`;

export const DangerIcon = styled(Danger)`
  margin-bottom: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 20px;
    width: 100px;
  }
`;

export const Header = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
`;

export const Info = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const HomepageButton = styled.button`
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  transition: 0.3s;
  
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.dodgerBlue};
  }

  &:active {
    filter: brightness(110%);
  }
`;
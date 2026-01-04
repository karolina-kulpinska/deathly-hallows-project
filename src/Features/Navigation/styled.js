import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: #000;
  padding: 16px 32px;
`;

export const Content = styled.div`
  max-width: 1368px;;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   padding: 8px; 
   gap: 8px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px; 
    gap: 8px;

  svg {
    width: 17px;
  }
}
`;

export const Menu = styled.nav`
  display: flex;
  gap: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 14px;

  &.active {
    border: 1px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};
  
  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const SearchWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  padding: 0 24px;
  width: 432px; 
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    margin-top: 16px;
    height: 60px;
    padding: 0 20px;
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    width: 100%; 
    justify-content: space-between; 
  }
`;
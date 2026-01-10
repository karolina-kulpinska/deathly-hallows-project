import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1368px;;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 23px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   padding: 16px; 
   gap: 12px;
   flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;

  svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;

    svg {
    width: 17px;
    height: 17px;
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
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  font-size: 14px;
  padding: 8px 24px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid transparent;

  ${({ $active }) => $active && `
    border-color: white;
  `}

  &.active {
    border-color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 8px 12px;
    height: 34px;
    border-radius: 29px;
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
    width: 20px;
    height: 20px;
    margin-right: 12px;
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

export const AppTitle = styled.h1`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 168px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 95px;
    height: 17px;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: -0.5px;
  }
`;
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
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px 32px;

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
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.5px;
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
  padding: 12px 18px;
  border-radius: 28px;
  text-transform: uppercase; 
  font-size: 14px;
  line-height: 14px;
  border: 1px solid transparent;
  font-weight: 600;

  &.active {
    border: 1px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 10px 20px;
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
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    width: 100%; 
    justify-content: space-between; 
  }
`;
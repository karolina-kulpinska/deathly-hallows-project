import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: #000;
  padding: 16px 32px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: bold;
  font-size: 20px;

  svg {
    display: block;
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 16px;
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 20px;

  &.active {
    border: 1px solid white;
  }
`;

export const SearchInput = styled.input`
  margin-left: auto;
  padding: 10px 16px;
  border-radius: 999px;
  border: none;
  width: 260px;
`;

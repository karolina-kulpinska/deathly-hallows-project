import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSearchQuery } from "../globalSlice";
import Logo from "./Logo";
import {
  Wrapper,
  Content,
  LogoWrapper,
  Menu,
  MenuLink,
  SearchInput,
} from "./styled";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isPeoplePage = location.pathname.includes("/people") || location.hash.includes("/people");

  const onSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Logo />
          <span>Movies Browser</span>
        </LogoWrapper>

        <Menu>
          <MenuLink exact to="/">
            MOVIES
          </MenuLink>
          <MenuLink to="/people">
            PEOPLE
          </MenuLink>
        </Menu>

        <SearchInput
          placeholder={isPeoplePage ? "Search for people..." : "Search for movies..."}
          onChange={onSearchChange}
        />
      </Content>
    </Wrapper>
  );
};

export default Navigation;

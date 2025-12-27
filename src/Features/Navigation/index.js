import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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

  const isHomePage = location.pathname === "/";

  const onMoviesClick = () => {
  if (isHomePage) {
    dispatch(setSearchQuery(""));
  }
};

  const searchQuery = useSelector(
  (state) => state.global.searchQuery);

  const isPeoplePage = location.pathname.includes("/people") || location.hash.includes("/people");

  const onSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Wrapper>
      <Content>
        <LogoWrapper as={Link} to ="/">
          <Logo />
          <span>Movies Browser</span>
        </LogoWrapper>

        <Menu>
          <MenuLink
            exact
            to="/"
            activeClassName="active"
            onClick={onMoviesClick}
          >
            MOVIES
          </MenuLink>
          <MenuLink 
            to="/people" 
            activeClassName="active"
          >
            PEOPLE
          </MenuLink>
        </Menu>

        <SearchInput
          value={searchQuery}
          placeholder={isPeoplePage ? "Search for people..." : "Search for movies..."}
          onChange={onSearchChange}
        />
      </Content>
    </Wrapper>
  );
};

export default Navigation;

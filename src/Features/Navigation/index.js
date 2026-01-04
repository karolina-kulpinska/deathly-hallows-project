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
  SearchWrapper,
  SearchIcon
} from "./styled";
import searchIcon from "../Navigation/Search.svg";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchQuery = useSelector((state) => state.global.searchQuery);
  const isPeoplePage = location.pathname.includes("/people") || location.hash.includes("/people");

  const clearSearch = () => {
    dispatch(setSearchQuery(""));
  };

  const onSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Wrapper>
      <Content>
        <LogoWrapper as={Link}
          to="/movies"
          onClick={() => dispatch(setSearchQuery(""))}>
          <Logo />
          <span>Movies Browser</span>
        </LogoWrapper>

        <Menu>
          <MenuLink
            exact
            to="/"
            activeClassName="active"
            onClick={clearSearch}
          >
            MOVIES
          </MenuLink>
          <MenuLink
            to="/people"
            activeClassName="active"
            onClick={clearSearch}
          >
            PEOPLE
          </MenuLink>
        </Menu>


        <SearchWrapper>
          <SearchIcon src={searchIcon} alt="" />
          <SearchInput
            value={searchQuery || ""}
            placeholder={isPeoplePage ? "Search for people..." : "Search for movies..."}
            onChange={onSearchChange}
          />
        </SearchWrapper>
      </Content>
    </Wrapper>
  );
};

export default Navigation;

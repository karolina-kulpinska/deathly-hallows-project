import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
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
  SearchIcon,
  NavGroup,
} from "./styled";
import searchIcon from "../Navigation/Search.svg";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const searchQuery = useSelector((state) => state.global.searchQuery);
  const isPeoplePage = location.pathname.includes("/people") || location.hash.includes("/people");

  const clearSearch = () => {
    dispatch(setSearchQuery(""));
    history.push(location.pathname);
  };

  const onSearchChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));

    const searchParams = new URLSearchParams(location.search || location.hash.split("?")[1]);

    if (query.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", query);
    }
    history.replace(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Content>
        <NavGroup>
          <LogoWrapper as={Link}
            to="/movies"
            onClick={clearSearch}>
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
        </NavGroup>

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

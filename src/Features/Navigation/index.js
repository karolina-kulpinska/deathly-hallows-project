import { useDispatch } from "react-redux";
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
          placeholder="Search for movies..."
          onChange={onSearchChange}
        />
      </Content>
    </Wrapper>
  );
};

export default Navigation;

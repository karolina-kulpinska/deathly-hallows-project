import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPopularPeople, globalSelectors } from "../globalSlice";
import { Container, StyledHeader } from "./styled";
import PersonTitle from "../../common/PersonTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";

export const PersonList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");
  const people = useSelector(globalSelectors.selectPeopleData);
  const isLoading = useSelector(globalSelectors.selectIsLoading);
  const isError = useSelector(globalSelectors.selectIsError);

  useEffect(() => {
    if (!query) {
      dispatch(fetchPopularPeople());
    }
  }, [dispatch, query]);


  if (isError) return <ErrorView />;
  if (isLoading) return <LoadingView />;

  return (
    <Container>
      <StyledHeader>
        {query ? `Search results for "${query}"` : "Popular people"}
      </StyledHeader>
      {people && people.map((person) => (
        <PersonTitle
          key={person.id}
          name={person.name}
          poster={person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : null}
        />
      ))}
    </Container>
  );
};
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPopularPeople, globalSelectors, setSearchQuery } from "../globalSlice";
import { Container, StyledHeader } from "./styled";
import PersonTitle from "../../common/PersonTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";
import Pagination from "../../common/Pagination";

export const PersonList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.hash.split("?")[1]).get("search");
  const people = useSelector(globalSelectors.selectPeopleData);
  const isLoading = useSelector(globalSelectors.selectIsLoading);
  const isError = useSelector(globalSelectors.selectIsError);
  const page = useSelector(globalSelectors.selectPage);

  useEffect(() => {
    if (!query) {
      dispatch(fetchPopularPeople());
    } else {
      dispatch(setSearchQuery(query));
    }
  }, [dispatch, query, page]);


  if (isError) return <ErrorView />;
  if (isLoading) return <LoadingView query={query} />;

  return (
    <Container>
      <StyledHeader>
        {query ? `Search results for "${query}"` : "Popular people"}
      </StyledHeader>
      {people && people.map((person) => (
        <PersonTitle
          key={person.id}
          name={person.name}
          id={person.id}
          poster={person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : null}

        />
      ))}
      <Pagination />
    </Container>
  );
};
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchPopularPeople,
  fetchSearchPeople,
  selectTotalResults,
  selectTotalPages,
} from "../peopleSlice";
import { StyledHeader, Container } from "./styled";
import { PeopleListCard } from "./PeopleListCard/index";
// Poprawione importy z końcówką "View" zgodnie z Twoją strukturą plików:
import { StyledSpinner, SpinnerWrapper } from "../../../common/LoadingView/styled";
import { Error } from "../../../common/ErrorView/index";
import { NoResults } from "../../../common/NoResultsView/index";
import { Pagination } from "../../../common/Pagination";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query");

  const people = useSelector((state) => state.people.peopleList);
  const status = useSelector((state) => state.people.status);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

  const isNoResults = status === "success" && query && totalResults === 0;

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchPeople({ query, page }));
    } else {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, query, page]);

  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      navigate(`?page=${newPage}${query ? `&query=${query}` : ""}`);
    }
  };

  if (status === "error") {
    return <Error />;
  }

  return (
    <>
      <StyledHeader>
        {query
          ? `Search results for "${query}"${
              totalResults ? ` (${totalResults})` : ""
            }`
          : "Popular people"}
      </StyledHeader>

      {status === "loading" && (
        <SpinnerWrapper>
          <StyledSpinner />
        </SpinnerWrapper>
      )}

      {status === "success" && (
        <>
          {isNoResults ? (
            <NoResults query={query} />
          ) : (
            <>
              <Container>
                {people.map((person) => (
                  <PeopleListCard key={person.id} person={person} />
                ))}
              </Container>

              <Pagination
                page={page}
                totalPages={Math.min(totalPages, 500)}
                onPageChange={onPageChange}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
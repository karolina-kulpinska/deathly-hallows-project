import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./components/MovieCard";
import { MoviesGrid, MovieTileLink } from "./components/MoviesGrid/styled";
import { Pagination } from "../../common/Pagination";
import { fetchPopularMoviesRequest } from "../../store/slices/moviesSlice";
import { Page, Title } from "./styled"; // Zmiana: importujemy Title
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";
import { useQueryParameter } from "../../features/search/queryParameters";

function PopularMovies() {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");

  const { popularMovies, loading, error, page, totalPages, totalResults } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    const pageToFetch = query ? 1 : page;
    dispatch(fetchPopularMoviesRequest({ page: pageToFetch, query: query }));
  }, [dispatch, query, page]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    dispatch(fetchPopularMoviesRequest({ page: newPage, query: query }));
  };

  if (loading) return <Loader />;
  if (error) return <p>Błąd: {error}</p>;

  if (!loading && query && popularMovies.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <Page>
      {/* Poprawka: Używamy stylizowanego Title zamiast <h2> */}
      <Title>
        {query 
          ? `Search results for "${query}" (${totalResults})` 
          : "Popular movies"}
      </Title>
      
      <MoviesGrid>
        {popularMovies.map((movie) => (
          <MovieTileLink key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </MovieTileLink>
        ))}
      </MoviesGrid>

      {popularMovies.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Page>
  );
}

export default PopularMovies;
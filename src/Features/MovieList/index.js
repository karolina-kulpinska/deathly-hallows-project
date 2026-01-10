import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { globalSelectors, fetchPopularMovies, setSearchQuery, fetchGenres } from '../globalSlice';
import { Container, MoviesGrid, StyledHeader, } from "./styled";
import MovieTitle from "../../common/MovieTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";
import Pagination from "../../common/Pagination";
import NoResultsView from "../../common/NoResultsView";

export const MovieList = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search || location.hash.split("?")[1]);
    const query = searchParams.get("search");

    const movies = useSelector(globalSelectors.selectMoviesData);
    const isLoading = useSelector(globalSelectors.selectIsLoading);
    const isError = useSelector(globalSelectors.selectIsError);
    const page = useSelector(globalSelectors.selectPage);
    const genres = useSelector(globalSelectors.selectGenres);
    const totalResults = useSelector(globalSelectors.selectTotalResults);
    const reduxQuery = useSelector(state => state.global.searchQuery);



    const getGenreNames = (genreIds) => {
        if (!genreIds || !genres || genres.length === 0) {
            return [];
        }

        return genreIds.map(id => {
            const genre = genres.find(g => g.id === id);
            return genre ? genre.name : null;
        }).filter(name => name !== null);
    };


    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    useEffect(() => {
        if (!query) {
            dispatch(fetchPopularMovies());
        } else {
            dispatch(setSearchQuery(query));
        }
    }, [query, page, dispatch]);

    if (isError) return <ErrorView />;
    if (isLoading) return <LoadingView query={query} />;

    if (query && query !== reduxQuery) {
        return <LoadingView query={query} />;
    }

    if (!isLoading && query && totalResults === 0) {
        return <NoResultsView query={query} />;
    }

    return (
        <Container>
            <StyledHeader>
                {!query
                    ? "Popular movies"
                    : `Search results for "${query}" ${totalResults >= 0 ? `(${totalResults})` : ""}`
                }
            </StyledHeader>

            <MoviesGrid>
            {movies && movies.map((movie) => (
                <MovieTitle
                    key={movie.id}
                    id={movie.id}
                    name={movie.title}
                    poster={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                            : null
                    }
                    year={movie.release_date ? movie.release_date.split("-")[0] : ""}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                    genres={getGenreNames(movie.genre_ids)}
                />
            ))}
            </MoviesGrid>
            {movies && movies.length > 0 && !isLoading && <Pagination />}
        </Container>
    );
};
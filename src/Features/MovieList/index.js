import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { globalSelectors, fetchPopularMovies, setSearchQuery, fetchGenres } from '../globalSlice';
import { Container, StyledHeader } from "./styled";
import MovieTitle from "../../common/MovieTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";
import Pagination from "../../common/Pagination";

export const MovieList = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.hash.split("?")[1]).get("search");

    const movies = useSelector(globalSelectors.selectMoviesData);
    const isLoading = useSelector(globalSelectors.selectIsLoading);
    const isError = useSelector(globalSelectors.selectIsError);
    const page = useSelector(globalSelectors.selectPage);
    const genres = useSelector(globalSelectors.selectGenres);

    const getGenreNames = (genreIds) => {
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

    return (
        <Container>
            <StyledHeader>
                {query ? `Search results for "${query}"` : "Popular movies"}
            </StyledHeader>
            {movies && movies.map((movie) => (
                <MovieTitle
                    key={movie.id}
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
            <Pagination />
        </Container>
    );
};
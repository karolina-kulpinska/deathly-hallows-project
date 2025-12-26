import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { globalSelectors, fetchPopularMovies, setSearchQuery } from '../globalSlice';
import { Container, StyledHeader } from "./styled";
import MovieTile from "../../common/MovieTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";

export const MovieList = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.hash.split("?")[1]).get("search");

    const movies = useSelector(globalSelectors.selectMoviesData);
    const isLoading = useSelector(globalSelectors.selectIsLoading);
    const isError = useSelector(globalSelectors.selectIsError);

    useEffect(() => {
        if (!query) {
            dispatch(fetchPopularMovies());
        } else {
            dispatch(setSearchQuery(query));
        }
    }, [dispatch, query]);

    if (isError) return <ErrorView />;
    if (isLoading) return <LoadingView query={query} />;

    return (
        <Container>
            <StyledHeader>
                {query ? `Search results for "${query}"` : "Popular movies"}
            </StyledHeader>
            {movies && movies.map((movie) => (
                <MovieTile
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
                />
            ))}
        </Container>
    );
};
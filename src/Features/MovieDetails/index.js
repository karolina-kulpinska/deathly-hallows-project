import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, globalSelectors } from "../globalSlice";
import PersonTitle from "../../common/PersonTitle";
import { Container } from "../MovieList/styled";
import {
    Page,
    MainTitle,
    SectionTitle,
    HeroWrapper,
    HeroBackdrop,
    HeroTitle,
    Overview,
    Tile,
    MovieImage,
    Details,
    StatusText
} from "./styled";

function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const movie = useSelector(globalSelectors.selectMovieDetails);
    const credits = useSelector(globalSelectors.selectMovieCredits);
    const loading = useSelector(globalSelectors.selectIsLoading);
    const error = useSelector(globalSelectors.selectIsError);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [dispatch, id]);

    if (loading) return <Page><StatusText>Loading...</StatusText></Page>;
    if (error) return <Page><StatusText>Error loading movie details!</StatusText></Page>;
    if (!movie) return null;

    const cast = credits?.cast || [];
    const crew = credits?.crew || [];

    return (
        <>
            {movie.backdrop_path && (
                <HeroWrapper>
                    <HeroBackdrop $url={movie.backdrop_path}>
                        <HeroTitle>{movie.title}</HeroTitle>
                    </HeroBackdrop>
                </HeroWrapper>
            )}

            <Page>
                <Tile>
                    <MovieImage src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                    <Details>
                        <MainTitle>{movie.title}</MainTitle>
                        {movie.release_date && (
                            <Overview>
                                {new Date(movie.release_date).getFullYear()}
                            </Overview>
                        )}
                        <Overview>{movie.overview}</Overview>
                    </Details>
                </Tile>

                <SectionTitle>Cast ({cast.length})</SectionTitle>
                <Container>
                    {cast.map((person) => (
                        <PersonTitle
                            key={person.credit_id}
                            id={person.id}
                            name={person.name}
                            description={person.character}
                            poster={person.profile_path}
                        />
                    ))}
                </Container>

                <SectionTitle>Crew ({crew.length})</SectionTitle>
                <Container>
                    {crew.map((person) => (
                        <PersonTitle
                            key={person.credit_id}
                            id={person.id}
                            name={person.name}
                            description={person.job}
                            poster={person.profile_path}
                        />
                    ))}
                </Container>
            </Page>
        </>
    );
}

export default MovieDetails;
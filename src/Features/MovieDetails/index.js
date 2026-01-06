import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, globalSelectors, clearMovieDetails } from "../globalSlice";
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
    StatusText,
    MovieYear,
    Properties,
    Property,
    PropertyName,
    PropertyValue,
    Genres,
    Genre,
    Description,
    RatingWrapper,
    StarIcon,
    Rate,
    MaxRate,
    Votes,
    PeopleList
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
        return () => {
            dispatch(clearMovieDetails());
        };
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
                            <MovieYear>{new Date(movie.release_date).getFullYear()}</MovieYear>
                        )}
                        <Properties>
                            <Property>
                                <PropertyName>Production:</PropertyName>
                                <PropertyValue>
                                    {movie.production_countries.map(country => country.name).join(", ")}
                                </PropertyValue>
                            </Property>

                            <Property>
                                <PropertyName>Release date:</PropertyName>
                                <PropertyValue>
                                    {movie.release_date ? movie.release_date.replaceAll("-", ".") : "n/a"}
                                </PropertyValue>
                            </Property>
                        </Properties>
                        <Genres>
                            {movie.genres.map(genre => (
                                <Genre key={genre.id}>{genre.name}</Genre>
                            ))}
                        </Genres>
                        <RatingWrapper>
                            <StarIcon viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </StarIcon>
                            <Rate>{movie.vote_average ? movie.vote_average.toFixed(1) : "0"}</Rate>
                            <MaxRate>/ 10</MaxRate>
                            <Votes>{movie.vote_count} votes</Votes>
                        </RatingWrapper>
                        <Overview>{movie.overview}</Overview>
                    </Details>
                </Tile>

                <SectionTitle>Cast ({cast.length})</SectionTitle>
                <PeopleList>
                    {cast.map((person) => (
                        <PersonTitle
                            key={person.credit_id}
                            id={person.id}
                            name={person.name}
                            description={person.character} // Przekazujemy postać
                            poster={person.profile_path}
                        />
                    ))}
                </PeopleList>

                <SectionTitle>Crew ({crew.length})</SectionTitle>
                <PeopleList>
                    {crew.map((person) => (
                        <PersonTitle
                            key={person.credit_id}
                            id={person.id}
                            name={person.name}
                            description={person.job}
                            poster={person.profile_path}
                        />
                    ))}
                </PeopleList>
            </Page>
        </>
    );
}

export default MovieDetails;
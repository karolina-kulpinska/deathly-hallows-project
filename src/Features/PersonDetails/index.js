import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonDetails, setPersonDetails } from "../globalSlice";
import {
    Wrapper,
    Photo,
    Data,
    Name,
    Biography,
    Subtitle,
    InfoWrapper,
    Label,
    Info,
    Content,
    BirthSection
} from "./styled";
import { Container } from "../MovieList/styled";
import MovieTile from "../../common/MovieTitle";
import LoadingView from "../../common/LoadingView";
import ErrorView from "../../common/ErrorView";

export const PersonDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const person = useSelector(state => state.global.personDetails);
    const isLoading = useSelector(state => state.global.isLoading);
    const isError = useSelector(state => state.global.isError);
    const allGenres = useSelector(state => state.global.genres);

    useEffect(() => {
        dispatch(setPersonDetails(null));
        dispatch(fetchPersonDetails(id));
    }, [dispatch, id]);

    if (isError) return <ErrorView />;
    if (isLoading) return <LoadingView />;
    if (!person) return null;

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";
        const [year, month, day] = dateString.split("-");
        return `${day}.${month}.${year}`;
    };

    const getGenreNames = (genreIds) => {
        if (!allGenres || allGenres.length === 0) return [];
        return genreIds.map(id => {
            const genre = allGenres.find(g => g.id === id);
            return genre ? genre.name : null;
        }).filter(name => name !== null);
    };



    return (
        <Content>
            <Wrapper>
                <Photo
                    src={person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : "brak_zdjecia.png"}
                    alt={person.name}
                />
                <Data>
                    <Name>{person.name}</Name>
                    <BirthSection>
                        <InfoWrapper>
                            <Label $birth>Date of birth:</Label>
                            <Info>{formatDate(person.birthday)}</Info>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Label>Place of birth:</Label>
                            <Info>{person.place_of_birth || "Unknown"}</Info>
                        </InfoWrapper>
                    </BirthSection>
                </Data>
                <Biography>{person.biography}</Biography>
            </Wrapper>

            {person.movie_credits?.cast?.length > 0 && (
                <>
                    <Subtitle>Movies - cast ({person.movie_credits.cast.length})</Subtitle>
                    <Container as="section">
                        {person.movie_credits.cast.map((movie) => (
                            <MovieTile
                                key={movie.credit_id}
                                id={movie.id}
                                name={movie.title}
                                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : null}
                                year={movie.release_date}
                                genres={getGenreNames(movie.genre_ids)}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        ))}
                    </Container>
                </>
            )}

            {person.movie_credits?.crew?.length > 0 && (
                <>
                    <Subtitle>Movies - crew ({person.movie_credits.crew.length})</Subtitle>
                    <Container as="section">
                        {person.movie_credits.crew.map((movie) => (
                            <MovieTile
                                key={movie.credit_id}
                                id={movie.id}
                                name={movie.title}
                                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : null}
                                year={movie.release_date}
                                genres={getGenreNames(movie.genre_ids)}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        ))}
                    </Container>
                </>
            )}
        </Content>
    );

};
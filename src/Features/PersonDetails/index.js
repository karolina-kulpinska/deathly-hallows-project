import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonDetails } from "../globalSlice";
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

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [dispatch, id]);

    if (isError) return <ErrorView />;
    if (isLoading) return <LoadingView />;
    if (!person) return null;



    return (
        <Content>
            <Wrapper>
                <Photo
                    src={person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : "brak_zdjecia.png"}
                    alt={person.name}
                />
                <Data>
                    <Name>{person.name}</Name>
                    <InfoWrapper>
                        <Label>Date of birth:</Label>
                        <Info>{person.birthday || "Unknown"}</Info>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Label>Place of birth:</Label>
                        <Info>{person.place_of_birth || "Unknown"}</Info>
                    </InfoWrapper>
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
                                title={movie.title}
                                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : null}
                                year={movie.release_date}
                                genres={movie.genre_ids}
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
                                title={movie.title}
                                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : null}
                                year={movie.release_date}
                                genres={movie.genre_ids}
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
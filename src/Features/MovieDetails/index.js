import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../globalSlice";
import PersonTitle from "../../common/PersonTitle";
import { Container } from "../MovieList/styled";
import { Page, MainTitle, SectionTitle } from "./styled";

function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { movieDetails, movieCredits, isLoading, isError } = useSelector(
        (state) => state.global
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [dispatch, id]);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading movie details!</p>;
    if (!movieDetails) return null;

    const cast = movieCredits?.cast || [];
    const crew = movieCredits?.crew || [];

    return (
        <Page>
            <MainTitle>{movieDetails.title}</MainTitle>

            <p>{movieDetails.overview}</p>

            {cast.length > 0 && (
                <>
                    <SectionTitle>Cast</SectionTitle>
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
                </>
            )}

            {crew.length > 0 && (
                <>
                    <SectionTitle>Crew</SectionTitle>
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
                </>
            )}
        </Page>
    );
}

export default MovieDetails;
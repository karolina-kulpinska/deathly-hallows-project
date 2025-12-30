import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDB_CONFIG } from "../../config/api";
import { ReactComponent as NoProfileIcon } from '../../images/NoProfile.svg';
import {
    DetailsContainer,
    ProfileSection,
    ProfileImageLarge,
    InfoSection,
    PersonName,
    InfoRow,
    Label,
    Value,
    Biography,
    BiographyText,
    MoviesSection,
    SectionTitle,
    MoviesGrid,
    MovieCard,
    MoviePoster,
    MovieTitle,
    MovieSubtitle,
    MovieBadge,
    LoadingMessage,
    ErrorMessage
} from "./PersonDetailsStyles";

const PersonDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [credits, setCredits] = useState({ cast: [], crew: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPersonDetails = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const apiKey = TMDB_CONFIG.API_KEY;
                const baseUrl = TMDB_CONFIG.BASE_URL;

                const personResponse = await fetch(
                    `${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`
                );
                
                if (!personResponse.ok) {
                    throw new Error(`HTTP error! status: ${personResponse.status}`);
                }
                
                const personData = await personResponse.json();
                setPerson(personData);

                const creditsResponse = await fetch(
                    `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
                );
                
                if (!creditsResponse.ok) {
                    throw new Error(`HTTP error! status: ${creditsResponse.status}`);
                }
                
                const creditsData = await creditsResponse.json();
                setCredits(creditsData);
                
            } catch (err) {
                console.error("Error fetching person details:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPersonDetails();
        }
    }, [id]);

    if (loading) {
        return <LoadingMessage>Ładowanie danych osoby...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>Błąd: {error}</ErrorMessage>;
    }

    if (!person) {
        return <ErrorMessage>Nie znaleziono osoby.</ErrorMessage>;
    }

    const profileImageUrl = person.profile_path
        ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w500${person.profile_path}`
        : null;

    const formatDate = (dateString) => {
        if (!dateString) return null;
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    };

    return (
        <DetailsContainer>
            <ProfileSection>
                <ProfileImageLarge>
                    {profileImageUrl ? (
                        <img src={profileImageUrl} alt={person.name} />
                    ) : (
                        <NoProfileIcon />
                    )}
                </ProfileImageLarge>
                
                <InfoSection>
                    <PersonName>{person.name}</PersonName>
                    
                    {person.birthday && (
                        <InfoRow>
                            <Label>Date of birth:</Label>
                            <Value>{formatDate(person.birthday)}</Value>
                        </InfoRow>
                    )}
                    
                    {person.place_of_birth && (
                        <InfoRow>
                            <Label>Place of birth:</Label>
                            <Value>{person.place_of_birth}</Value>
                        </InfoRow>
                    )}
                    
                    {person.biography && (
                        <Biography>
                            <BiographyText>{person.biography}</BiographyText>
                        </Biography>
                    )}
                </InfoSection>
            </ProfileSection>

            {credits.cast && credits.cast.length > 0 && (
                <MoviesSection>
                    <SectionTitle>Movies - cast ({credits.cast.length})</SectionTitle>
                    <MoviesGrid>
                        {credits.cast.map((movie) => {
                            const posterUrl = movie.poster_path
                                ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w300${movie.poster_path}`
                                : null;

                            return (
                                <MovieCard key={`cast-${movie.id}-${movie.credit_id}`}>
                                    <MoviePoster>
                                        {posterUrl ? (
                                            <img src={posterUrl} alt={movie.title} />
                                        ) : (
                                            <div>No poster</div>
                                        )}
                                    </MoviePoster>
                                    <MovieTitle>{movie.title}</MovieTitle>
                                    <MovieSubtitle>
                                        {movie.character && `${movie.character} (${movie.release_date?.split('-')[0] || 'N/A'})`}
                                        {!movie.character && (movie.release_date?.split('-')[0] || 'N/A')}
                                    </MovieSubtitle>
                                    {movie.vote_average > 0 && (
                                        <MovieBadge>
                                            ⭐ {movie.vote_average.toFixed(1)}
                                        </MovieBadge>
                                    )}
                                </MovieCard>
                            );
                        })}
                    </MoviesGrid>
                </MoviesSection>
            )}

            {credits.crew && credits.crew.length > 0 && (
                <MoviesSection>
                    <SectionTitle>Movies - crew ({credits.crew.length})</SectionTitle>
                    <MoviesGrid>
                        {credits.crew.map((movie) => {
                            const posterUrl = movie.poster_path
                                ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w300${movie.poster_path}`
                                : null;

                            return (
                                <MovieCard key={`crew-${movie.id}-${movie.credit_id}`}>
                                    <MoviePoster>
                                        {posterUrl ? (
                                            <img src={posterUrl} alt={movie.title} />
                                        ) : (
                                            <div>No poster</div>
                                        )}
                                    </MoviePoster>
                                    <MovieTitle>{movie.title}</MovieTitle>
                                    <MovieSubtitle>
                                        {movie.job && `${movie.job} (${movie.release_date?.split('-')[0] || 'N/A'})`}
                                        {!movie.job && (movie.release_date?.split('-')[0] || 'N/A')}
                                    </MovieSubtitle>
                                    {movie.vote_average > 0 && (
                                        <MovieBadge>
                                            ⭐ {movie.vote_average.toFixed(1)}
                                        </MovieBadge>
                                    )}
                                </MovieCard>
                            );
                        })}
                    </MoviesGrid>
                </MoviesSection>
            )}
        </DetailsContainer>
    );
};

export default PersonDetails;
import React from 'react';
import { useSelector } from 'react-redux';
import { globalSelectors } from '../globalSlice';

const MovieList = () => {
    const movies = useSelector(globalSelectors.selectMoviesData);
    const isLoading = useSelector(globalSelectors.selectIsLoading);
    const isError = useSelector(globalSelectors.selectIsError);

    if (isError) {
        return <p className="error-message">Wystąpił błąd podczas ładowania danych. Sprawdź konsolę i połączenie z internetem.</p>;
    }

    if (isLoading && movies.length === 0) {
        return <p className="loading-message">Ładowanie najpopularniejszych filmów...</p>;
    }

    if (movies.length === 0) {
        return <p className="no-results-message">Brak filmów do wyświetlenia. Zacznij szukać!</p>;
    }

    return (
        <div className="movie-list-grid">
            <h2>{movies.length > 20 ? 'Popularne Filmy' : 'Wyniki Wyszukiwania'}</h2>

            {movies.map(movie => (
                //Karta filmu (zgodnie z projektem z Figmy)
                <div key={movie.id} className="movie-card">
                    {/* W Figmie masz dokładne wymiary dla plakatu, użyj ich ! */}
                    {movie.poster_path && (
                        <img
                            // Używamy standardowej ścieżki TMDB dla plakatów
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                    )}
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-year">Rok: {movie.release_date ? movie.release_date.substring(0, 4) : 'Brak'}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
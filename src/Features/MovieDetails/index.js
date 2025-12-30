import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsRequest } from "../../store/slices/moviesSlice";
import { Page } from "./styled";
import { Hero } from "./components/Hero";
import { MovieHeader } from "./components/MovieHeader";
import { CastSection } from "./components/CastSection";
import { CrewSection } from "./components/CrewSection";
import { Loader } from "../../common/Loader";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, movieCredits, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetailsRequest(id));
    }
  }, [dispatch, id]);

  if (loading || !movieDetails) {
    return <Loader />;
  }

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  const cast = movieCredits?.cast || [];
  const crew = movieCredits?.crew || [];

  return (
    <>
      <Hero movie={movieDetails} />
      <Page>
        <MovieHeader movie={movieDetails} />
        {cast.length > 0 && <CastSection cast={cast} />}
        {crew.length > 0 && <CrewSection crew={crew} />}
      </Page>
    </>
  );
}

export default MovieDetails;
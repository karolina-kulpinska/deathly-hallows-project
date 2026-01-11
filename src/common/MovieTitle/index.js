import {
  Wrapper,
  Image,
  Name,
  PosterWrapper,
  Content,
  Year,
  RatingWrapper,
  StarIcon,
  StarPath,
  Rate,
  Votes,
  GenresWrapper,
  GenreTag
} from "./styled";
import MoviePlaceholder from "./Placeholder";

const MovieTitle = ({ id, name, poster, year, rate, votes, genres, character }) => (
  <Wrapper to={`/movie/${id}`}>
    <PosterWrapper>
      {poster ?
        <Image src={poster} alt={name} /> : <MoviePlaceholder />}
    </PosterWrapper>
    <Content>
      <Name>{name}</Name>
      <Year>
        {character ? `${character} (${new Date(year).getFullYear()})` : (year ? new Date(year).getFullYear() : "")}
      </Year>
      {genres && genres.length > 0 && (
        <GenresWrapper>
          {genres.map(genre => (
            <GenreTag key={genre}>{genre}</GenreTag>
          ))}
        </GenresWrapper>
      )}
      <RatingWrapper>
        <StarIcon>
          <StarPath />
        </StarIcon>
        <Rate>{rate ? Number(rate).toFixed(1) : "0.0"}</Rate>
        <Votes>{votes} votes</Votes>
      </RatingWrapper>
    </Content>
  </Wrapper >
);

export default MovieTitle;
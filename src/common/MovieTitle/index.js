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
  Votes
} from "./styled";
import MoviePlaceholder from "./Placeholder";

const MovieTitle = ({ id, name, poster, year, rate, votes }) => (
  <Wrapper to={`/movies/${id}`}>
    <PosterWrapper>
      {poster ? <Image src={poster} alt={name} /> : <MoviePlaceholder />}
    </PosterWrapper>
    <Content>
      <Name>{name}</Name>
      <Year>{year}</Year>
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
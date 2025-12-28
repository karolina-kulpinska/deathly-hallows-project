import { Wrapper, Image, Name, PosterWrapper, Content, Year } from "./styled";
import MoviePlaceholder from "./Placeholder";

const MovieTitle = ({ id, name, poster, year, rate, votes }) => (
  <Wrapper to={`/movies/${id}`}>
    <PosterWrapper>
      {poster ? <Image src={poster} alt={name} /> : <MoviePlaceholder />}
    </PosterWrapper>
    <Content>
      <Name>{name}</Name>
      <Year>{year}</Year>
      {/* Tu wstawimy komponent ocen, jak juz będzie gotowy */}
    </Content>
  </Wrapper >
);

export default MovieTitle;
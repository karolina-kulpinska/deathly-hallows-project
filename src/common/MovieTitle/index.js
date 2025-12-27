import { Wrapper, Image, Name, PosterWrapper } from "./styled";
import MoviePlaceholder from "./Placeholder";

const MovieTitle = ({ name, poster }) => (
    <Wrapper>
        <PosterWrapper>
        {poster ? (
      <Image src={poster} alt={name} />
    ) : (
      <MoviePlaceholder />
    )}
    </PosterWrapper>
        <Name>{name}</Name>
    </Wrapper>
);

export default MovieTitle;
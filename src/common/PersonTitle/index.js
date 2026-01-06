import { Link } from "react-router-dom";
import { Wrapper, Image, Name, PosterWrapper, Role } from "./styled";
import PersonPlaceholder from "./Placeholder";

const PersonTitle = ({ name, poster, id, description }) => (
  <Wrapper as={Link} to={`/person/${id}`}>
    <PosterWrapper>
      {poster ? (
        <Image src={`https://image.tmdb.org/t/p/w185${poster}`} alt={name} />) : (
        <PersonPlaceholder />
      )}
    </PosterWrapper>
    <Name>{name}</Name>
    {description && <Role>{description}</Role>}
  </Wrapper>
);

export default PersonTitle;
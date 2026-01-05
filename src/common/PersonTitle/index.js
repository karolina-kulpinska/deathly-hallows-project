import { Link } from "react-router-dom";
import { Wrapper, Image, Name, PosterWrapper } from "./styled";
import PersonPlaceholder from "./Placeholder";

const PersonTitle = ({ name, poster, id }) => (
  <Wrapper as={Link} to={`/person/${id}`}>
    <PosterWrapper>
      {poster ? (
        <Image src={poster} alt={name} />
      ) : (
        <PersonPlaceholder />
      )}
    </PosterWrapper>
    <Name>{name}</Name>
  </Wrapper>
);

export default PersonTitle;
import { Wrapper, Image, Name, PosterWrapper } from "./styled";
import PersonPlaceholder from "./Placeholder";

const PersonTitle = ({ name, poster }) => (
    <Wrapper>
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
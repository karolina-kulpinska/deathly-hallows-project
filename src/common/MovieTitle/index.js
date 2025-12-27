import { Wrapper, Image, Name } from "./styled";

const MovieTile = ({ name, poster }) => (
    <Wrapper>
        <Image src={poster} alt={name} />
        <Name>{name}</Name>
    </Wrapper>
);

export default MovieTile;
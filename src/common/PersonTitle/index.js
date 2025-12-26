import { Wrapper, Image, Name } from "./styled";

const PersonTitle = ({ name, poster }) => (
    <Wrapper>
        <Image src={poster} alt={name} />
        <Name>{name}</Name>
    </Wrapper>
);

export default PersonTitle;
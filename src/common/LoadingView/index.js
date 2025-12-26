import { Container, Header, Spinner } from "./styled";

const LoadingView = () => (
    <Container>
        <Header>Search results for "Popular People"</Header>
        <Spinner></Spinner>
    </Container>
);

export default LoadingView;
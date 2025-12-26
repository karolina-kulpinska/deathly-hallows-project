import { Container, Header, Spinner } from "./styled";

const LoadingView = ({ query }) => (
    <Container>
        <Header>{query ? `Search results for "${query}"` : "Loading..."}</Header>
        <Spinner></Spinner>
    </Container>
);

export default LoadingView;
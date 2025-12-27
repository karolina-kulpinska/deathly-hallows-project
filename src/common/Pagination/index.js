import { Wrapper, Button, Text, Span } from "./styled";

const Pagination = () => {
    return (
        <Wrapper>
            <Button disabled>First</Button>
            <Button disabled>Previous</Button>
            <Text>
                Page <Span>1</Span> of <Span>500</Span>
            </Text>
            <Button>Next</Button>
            <Button>Last</Button>
        </Wrapper>
    );
};

export default Pagination;
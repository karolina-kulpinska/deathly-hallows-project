import { useSelector, useDispatch } from "react-redux";
import { globalSelectors, setPage } from "../../Features/globalSlice";
import { Wrapper, Button, Text, Number, ButtonText } from "./styled";

const Pagination = () => {
    const dispatch = useDispatch();
    const page = useSelector(globalSelectors.selectPage);
    const totalPages = useSelector(globalSelectors.selectTotalPages);

    const Arrow = ({ back }) => (
        <svg
            width="7" height="11" viewBox="0 0 7 11" fill="none"
            style={{ transform: back ? "rotate(180deg)" : "" }}
        >
            <path d="M0.35 1.15L4.7 5.5L0.35 9.85L1.4 10.9L6.8 5.5L1.4 0.1L0.35 1.15Z" fill="#0044CC" />
        </svg>
    );

    return (
        <Wrapper>
            <Button
                disabled={page === 1}
                onClick={() => dispatch(setPage(1))}>
                <Arrow back />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled={page === 1}
                onClick={() => dispatch(setPage(page - 1))}>
                <Arrow back />
                <ButtonText>Previous</ButtonText>
            </Button>

            <Text>
                Page <Number>{page}</Number> of <Number>{totalPages}</Number>
            </Text>

            <Button
                disabled={page === totalPages}
                onClick={() => dispatch(setPage(page + 1))}>
                <ButtonText>Next</ButtonText>
                <Arrow />
            </Button>
            <Button
                disabled={page === totalPages}
                onClick={() => dispatch(setPage(totalPages))}>
                <ButtonText>Last</ButtonText>
                <Arrow />
            </Button>
        </Wrapper>
    );
};

export default Pagination;
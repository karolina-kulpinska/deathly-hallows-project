import { all, call, debounce, put } from "redux-saga/effects";
import { setSearchQuery, setMoviesData, setError, setLoading } from "./globalSlice";
import tmdbApi from "../Api/tmdbApi";

function* fetchMoviesHandler(action) {
    const query = action.payload;

    if (query === "") {
        yield put(setMoviesData(null));
        return;
    }

    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const response = yield call(tmdbApi.get, "search/movie", {
            params: {
                query: query,
                language: "pl-PL",
                page: 1,
            },
        });

        yield put(setMoviesData(response.data.results));

    } catch (error) {
        yield put(setError(true));
        console.error("Błąd pobierania filmów:", error);

    }
}

function* searchWatcher() {
    yield debounce(500, setSearchQuery.type, fetchMoviesHandler);
}

export function* globalSaga() {
    yield all([
        call(searchWatcher),
    ]);
}
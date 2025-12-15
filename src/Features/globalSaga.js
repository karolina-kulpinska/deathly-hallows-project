import {
    all,
    call,
    debounce,
    put,
    takeLatest
} from "redux-saga/effects";
import {
    setSearchQuery,
    setMoviesData,
    setError,
    setLoading,
    fetchPopularMovies
} from "./globalSlice";
import { getSearchMovies, getPopularMovies } from "../Api/tmdbApi";

function* fetchSearchMoviesHandler(action) {
    const query = action.payload;

    if (query === "") {
        yield put(setMoviesData([]));
        return;
    }

    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const movies = yield call(getSearchMovies, query);

        yield put(setMoviesData(movies));
    } catch (error) {
        yield put(setError(true));
        console.error("Błąd pobierania filmów:", error);
    }
}

function* fetchPopularMoviesHandler() {
    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const movies = yield call(getPopularMovies);

        yield put(setMoviesData(movies));

    } catch (error) {
        yield put(setError(true));
        console.error("Błąd podczas pobierania popularnych filmów:", error);
    }
}


function* searchWatcher() {
    yield debounce(500, setSearchQuery.type, fetchSearchMoviesHandler);
}

function* popularMoviesWatcher() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}



export function* globalSaga() {
    yield all([
        call(searchWatcher),
        call(popularMoviesWatcher),
    ]);
}
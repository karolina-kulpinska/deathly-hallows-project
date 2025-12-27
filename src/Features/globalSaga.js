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
    fetchPopularMovies,
    fetchPopularPeople,
    setPeopleData
} from "./globalSlice";
import { getSearchMovies, getPopularMovies, getPopularPeople, getSearchPeople } from "../Api/tmdbApi";

function* fetchSearchHandler(action) {
    const query = action.payload;

    if (query === "") {
        const isPeoplePage = window.location.hash.includes("/people");

        if (isPeoplePage) {
            yield put(fetchPopularPeople());
        } else {
            yield put(fetchPopularMovies());
        }
        return;
    }

    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const isPeoplePage = window.location.hash.includes("/people");

        const data = isPeoplePage
            ? yield call(getSearchPeople, query)
            : yield call(getSearchMovies, query);

        if (isPeoplePage) {
            yield put(setPeopleData(data));
        } else {
            yield put(setMoviesData(data));
        }
    } catch (error) {
        yield put(setError(true));
        console.error("Błąd wyszukiwania:", error);
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
    yield debounce(500, setSearchQuery.type, fetchSearchHandler);
}

function* popularMoviesWatcher() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}

function* fetchPopularPeopleHandler() {
    try {
        yield put(setLoading(true));
        yield put(setError(false));
        const people = yield call(getPopularPeople);
        yield put(setPeopleData(people));
    } catch (error) {
        yield put(setError(true));
        console.error("Błąd podczas pobierania listy popularnych osób:", error);
    }
}

function* popularPeopleWatcher() {
    yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}



export function* globalSaga() {
    yield all([
        call(searchWatcher),
        call(popularMoviesWatcher),
        call(popularPeopleWatcher),
    ]);
}
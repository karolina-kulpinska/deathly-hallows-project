import {
    all,
    call,
    debounce,
    put,
    takeLatest,
    select
} from "redux-saga/effects";
import {
    setSearchQuery,
    setMoviesData,
    setError,
    setLoading,
    fetchPopularMovies,
    fetchPopularPeople,
    setPeopleData,
    setTotalPages,
    globalSelectors
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
        const page = yield select(globalSelectors.selectPage);

        const data = isPeoplePage
            ? yield call(getSearchPeople, query, page)
            : yield call(getSearchMovies, query, page);

        const totalPages = data.total_pages > 500 ? 500 : data.total_pages;

        if (isPeoplePage) {
            yield put(setPeopleData(data.results));
            yield put(setTotalPages(totalPages));
        } else {
            yield put(setMoviesData(data.results));
            yield put(setTotalPages(totalPages));
        }
    } catch (error) {
        yield put(setError(true));
    }
}

function* fetchPopularMoviesHandler() {
    try {
        yield put(setLoading(true));
        const page = yield select(globalSelectors.selectPage);
        const data = yield call(getPopularMovies, page);
        yield put(setError(false));
        const totalPages = data.total_pages > 500 ? 500 : data.total_pages;



        yield put(setMoviesData(data.results));
        yield put(setTotalPages(totalPages));

    } catch (error) {
        yield put(setError(true));
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

        const page = yield select(globalSelectors.selectPage);
        const data = yield call(getPopularPeople, page);
        const totalPages = data.total_pages > 500 ? 500 : data.total_pages;

        yield put(setPeopleData(data.results));
        yield put(setTotalPages(totalPages));


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
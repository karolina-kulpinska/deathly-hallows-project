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
    globalSelectors,
    fetchGenres,
    setGenres,
    setTotalResults,
    fetchPersonDetails,
    setPersonDetails,
    fetchMovieDetails,
    setMovieDetails,
    setMovieCredits,
} from "./globalSlice";
import {
    getSearchMovies,
    getPopularMovies,
    getPopularPeople,
    getSearchPeople,
    getGenres,
    getPersonDetails,
    getPersonCredits,
    getMovieDetails,
    getMovieCredits
} from "../Api/tmdbApi";

function* fetchSearchHandler(action) {
    const query = action.payload;
    if (query === "") {
        yield put(setTotalResults(0));
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

        yield put(setTotalResults(data.total_results));

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
        yield put(fetchGenres());
        yield put(setError(false));
        yield put(setLoading(true));
        const page = yield select(globalSelectors.selectPage);
        const data = yield call(getPopularMovies, page);
        const totalPages = data.total_pages > 500 ? 500 : data.total_pages;



        yield put(setMoviesData(data.results));
        yield put(setTotalPages(totalPages));

    } catch (error) {
        yield put(setError(true));
    }
}

function* fetchGenresHandler() {
    try {
        const data = yield call(getGenres);
        yield put(setGenres(data.genres));
    } catch (error) {
        console.error("Error while fetching genres:", error);
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

function* genresWatcher() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
function* fetchPersonDetailsHandler(action) {
    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const id = action.payload;
        const [person, credits] = yield all([
            call(getPersonDetails, id),
            call(getPersonCredits, id)
        ]);
        yield put(setPersonDetails({ ...person, movie_credits: credits }));
    } catch (error) {
        yield put(setError(true));
        console.error("Error getting person details:", error);
    }
}
function* personDetailsWatcher() {
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
function* fetchMovieDetailsHandler(action) {
    try {
        yield put(setLoading(true));
        yield put(setError(false));

        const id = action.payload;
        const [movie, credits] = yield all([
            call(getMovieDetails, id),
            call(getMovieCredits, id)
        ]);

        yield put(setMovieDetails(movie));
        yield put(setMovieCredits(credits));
    } catch (error) {
        yield put(setError(true));
        console.error("Error getting movie details:", error);
    }
}

function* movieDetailsWatcher() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}

export function* globalSaga() {
    yield all([
        call(searchWatcher),
        call(popularMoviesWatcher),
        call(popularPeopleWatcher),
        call(genresWatcher),
        call(personDetailsWatcher),
        call(movieDetailsWatcher),
    ]);
}
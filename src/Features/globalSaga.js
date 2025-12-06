import { all, call, debounce } from "redux-saga/effects";
import { setSearchQuery } from "./globalSlice";

function* fetchMoviesHandler() {
    console.log("-> OK, minęło 0.5 sekundy, dzwonię do TMDB...");
}

function* searchWatcher() {
    yield debounce(500, setSearchQuery.type, fetchMoviesHandler);
}

export function* globalSaga() {
    yield all([
        call(searchWatcher),
    ]);
}
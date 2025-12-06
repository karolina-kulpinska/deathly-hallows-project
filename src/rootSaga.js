import { all, call } from "redux-saga/effects";
import { globalSaga } from "./Features/globalSaga";

export default function* rootSaga() {
    yield all([
        call(globalSaga),
    ]);
}
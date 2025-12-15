import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { globalReducer } from "./Features/globalSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        global: globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
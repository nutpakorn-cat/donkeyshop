import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./slices/catSlice";
import createSagaMiddleware from "redux-saga";
import catSaga from "./sagas/catSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(catSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

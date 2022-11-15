import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import { getCatsSuccess } from "../slices/catSlice";

function* workGetCatsFetch(): Generator<CallEffect | PutEffect, void, any> {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  yield put(getCatsSuccess(formattedCats));
}

function* catSaga(): Generator<ForkEffect, void, any> {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;

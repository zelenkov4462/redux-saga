import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT_COUNT,
  ASYNC_INCREMENT_COUNT,
  decrementCountActionCreator,
  incrementCountActionCreator,
} from "../store/CountReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCountActionCreator());
}

export function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCountActionCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT_COUNT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT_COUNT, decrementWorker);
}

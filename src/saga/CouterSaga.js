import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_INCREMENT_COUNT,
  incrementCountActionCreator,
} from "../store/CountReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCountActionCreator());
}

export function* decrementWorker() {}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT_COUNT, incrementWorker);
}

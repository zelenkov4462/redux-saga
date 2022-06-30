import { put, takeEvery } from "redux-saga/effects";
import {
  INC_ASYNC,
  incAsyncAction,
  incrementAction,
} from "../store/countReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementAction());
}

function* decrementWorker() {}

export function* countWatcher() {
  yield takeEvery(INC_ASYNC, incrementWorker);
}

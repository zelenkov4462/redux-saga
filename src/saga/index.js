import { all } from "redux-saga/effects";
import { countWatcher } from "./CouterSaga";
import { userWatcher } from "./UserSaga";

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}

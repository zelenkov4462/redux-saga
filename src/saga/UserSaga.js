import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, fetchUsers, getAllUsers } from "../store/UserReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

export function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(getAllUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer } from "./usersReducer";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../saga/countSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  count: countReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(countWatcher);

import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./CountReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./UserReducer";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../saga/CouterSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(countWatcher);

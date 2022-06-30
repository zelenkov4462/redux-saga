import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incAsyncAction,
  incrementAction,
} from "./store/countReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);

  const incCount = () => {
    dispatch(incAsyncAction());
  };
  const decCount = () => {
    dispatch(decrementAction(1));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={() => incCount()}>INC</button>
        <button onClick={() => decCount()}>DEC</button>
        <button>Получить список клиентов</button>
      </div>
      {!users.length ? (
        <h1>Список клиентов пуст</h1>
      ) : (
        users.map((user) => <div>{user.name}</div>)
      )}
    </div>
  );
}

export default App;

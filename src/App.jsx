import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementCountActionCreator,
  asyncIncrementCountActionCreator,
  decrementCountActionCreator,
  incrementCountActionCreator,
} from "./store/CountReducer";
import {
  addUserActionCreator,
  fetchUsers,
  removeUserActionCreator,
} from "./store/UserReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);

  const incCount = () => {
    dispatch(incrementCountActionCreator());
  };

  const decCount = () => {
    dispatch(decrementCountActionCreator());
  };

  const addUser = (name) => {
    const newUser = {
      id: Date.now(),
      name: name,
    };
    dispatch(addUserActionCreator(newUser));
  };

  const removeUser = (user) => {
    dispatch(removeUserActionCreator(user));
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
        <button onClick={() => dispatch(asyncIncrementCountActionCreator())}>
          INC
        </button>
        <button onClick={() => dispatch(asyncDecrementCountActionCreator())}>
          DEC
        </button>
        <button onClick={() => addUser(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchUsers())}>
          Добавить всех клиентов
        </button>
      </div>
      <div>
        {users.map((user) => (
          <div onClick={() => removeUser(user.id)} key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

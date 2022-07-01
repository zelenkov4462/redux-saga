const defaultState = {
  users: [],
};

const GET_ALL_USERS = "GET_ALL_USERS";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case GET_ALL_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export const addUserActionCreator = (payload) => ({ type: ADD_USER, payload });
export const removeUserActionCreator = (payload) => ({
  type: REMOVE_USER,
  payload,
});

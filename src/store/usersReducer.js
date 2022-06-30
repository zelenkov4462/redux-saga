const defaultState = {
  users: [],
};

const GET_MANY_USERS = "GET_MANY_USERS";

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MANY_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export const getManyUsersActions = (payload) => ({
  type: GET_MANY_USERS,
  payload,
});

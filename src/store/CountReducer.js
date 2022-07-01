const defaultCount = {
  count: 0,
};

export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const ASYNC_INCREMENT_COUNT = "ASYNC_INCREMENT_COUNT";

export const countReducer = (state = defaultCount, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const incrementCountActionCreator = () => ({ type: INCREMENT_COUNT });
export const decrementCountActionCreator = () => ({ type: DECREMENT_COUNT });
export const asyncIncrementCountActionCreator = () => ({
  type: ASYNC_INCREMENT_COUNT,
});

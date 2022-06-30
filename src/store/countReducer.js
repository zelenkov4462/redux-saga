const defaultState = {
  count: 0,
};

export const INC = "INC";
export const INC_ASYNC = "INC_ASYNC";
export const DEC = "DEC";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + 1 };
    case DEC:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: INC });
export const decrementAction = () => ({ type: DEC });
export const incAsyncAction = () => ({ type: INC_ASYNC });

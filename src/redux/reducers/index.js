const initialState = {
  count: 0,
  userType: "USER",
};

function addReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "INCREMENT": {
      debugger;
      return { ...state, count: state.count + payload };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - payload };
    }
    default:
      return state;
  }
}

export default addReducer;

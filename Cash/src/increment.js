let initialState = { count: 0 };

function increment(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 10
    };
  }
  if (action.type === "DECREMENT" && state.count > 0) {
    return {
      count: state.count - 10
    };
  }

  return state;
}

export default increment;

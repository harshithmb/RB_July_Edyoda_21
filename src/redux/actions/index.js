export const incrementAction = (payload) => {
  debugger;
  return {
    // rxaction
    type: "INCREMENT",
    payload,
  };
};

export const decrementAction = (payload) => ({
  type: "DECREMENT",
  payload,
});

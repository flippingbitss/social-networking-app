import config from "kit/config";

export const createReducer = (key, reducer, initialState = {}) => {
  config.addReducer(key, reducer, initialState);
  console.log("Added Reducer: "+ key);
  return reducer;
};

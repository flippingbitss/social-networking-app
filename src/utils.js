import config from "kit/config";

export const createReducer = (key, reducer, initialState = {}) => {
  config.addReducer(key, reducer, initialState);
  console.log(`Added Reducer: ${key}`);
  return reducer;
};

/**
 * @param {any} value 
 * @param {any} min 
 * @param {any} max 
 */
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

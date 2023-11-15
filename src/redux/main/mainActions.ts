import { MainAction, MainActionTypes } from "./mainReducer";

export const increment = (): MainAction => {
  return {
    type: MainActionTypes.INCREMENT,
  };
};

export const decrement = (): MainAction => {
  return {
    type: MainActionTypes.DECREMENT,
  };
};

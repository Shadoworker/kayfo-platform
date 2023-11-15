interface MainState {
    value: number;
  }
  
  const initialState: MainState = {
    value: 0,
  };
  
  export enum MainActionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
  }
  
  interface IncrementAction {
    type: MainActionTypes.INCREMENT;
  }
  
  interface DecrementAction {
    type: MainActionTypes.DECREMENT;
  }
  
  export type MainAction = IncrementAction | DecrementAction;
  
  const mainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
      case MainActionTypes.INCREMENT:
        return { ...state, value: state.value + 1 };
      case MainActionTypes.DECREMENT:
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
  };
  
  export default mainReducer;
  
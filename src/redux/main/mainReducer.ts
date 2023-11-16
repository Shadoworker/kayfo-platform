interface MainState {
    filterTag: string;
  }
  
  const initialState: MainState = {
    filterTag: "",
  };
  
  export enum MainActionTypes {
    SET_FILTER_TAG = "SET_FILTER_TAG",
  }

  
  const mainReducer = (state = initialState, action: any): MainState => {
    switch (action.type) {
      
      case MainActionTypes.SET_FILTER_TAG:
        return { ...state, filterTag: action.payload };
      

      default:
        return state;
    }
  };
  
  export default mainReducer;
  
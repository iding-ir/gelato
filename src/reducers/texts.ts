import { TEXTS_SET_TEXT } from "../constants";
import { IAction, Text } from "../actions/texts";

export interface IStateTexts {
  text: Text | null;
}

const initialState: IStateTexts = {
  text: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TEXTS_SET_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default reducer;

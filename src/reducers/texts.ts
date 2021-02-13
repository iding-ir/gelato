import { TEXTS_SET_TEXT, TEXTS_ADD_TEXT } from "../constants";
import { IAction } from "../actions/texts";

export interface IStateTexts {
  text: string;
  position: [number, number];
}

export const initialState: IStateTexts = {
  text: "SUNNY DAY",
  position: [0, 0],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TEXTS_SET_TEXT:
      return { ...state, text: action.payload };
    case TEXTS_ADD_TEXT:
      return { ...state, position: action.payload };
    default:
      return state;
  }
};

export default reducer;

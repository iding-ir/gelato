import { TEXTS_ADD } from "../constants";
import { IAction, Text } from "../actions/texts";

export interface IStateTexts {
  texts: Text[];
}

const initialState: IStateTexts = {
  texts: [],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TEXTS_ADD:
      return { ...state, texts: [...state.texts, action.payload] };
    default:
      return state;
  }
};

export default reducer;

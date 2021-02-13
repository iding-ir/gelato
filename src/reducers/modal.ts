import { MODAL_SHOW, MODAL_HIDE } from "../constants";
import { IAction } from "../actions/modal";

export interface IStateModal {
  visibility: boolean;
}

const initialState: IStateModal = {
  visibility: false,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, visibility: true };
    case MODAL_HIDE:
      return { ...state, visibility: false };
    default:
      return state;
  }
};

export default reducer;

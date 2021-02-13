import { combineReducers } from "redux";

import imagesReducer, { IStateImages } from "./images";
import textsReducer, { IStateTexts } from "./texts";
import modalReducer, { IStateModal } from "./modal";

export interface IState {
  images: IStateImages;
  texts: IStateTexts;
  modal: IStateModal;
}

const combinedReducers = combineReducers({
  images: imagesReducer,
  texts: textsReducer,
  modal: modalReducer,
});

export default combinedReducers;

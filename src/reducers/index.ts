import { combineReducers } from "redux";

import imagesReducer, { IStateImages } from "./images";
import textsReducer, { IStateTexts } from "./texts";

export interface IState {
  images: IStateImages;
  texts: IStateTexts;
}

const combinedReducers = combineReducers({
  images: imagesReducer,
  texts: textsReducer,
});

export default combinedReducers;

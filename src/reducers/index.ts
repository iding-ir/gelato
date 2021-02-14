import { combineReducers } from "redux";

import imagesReducer, { IStateImages } from "./images";
import textsReducer, { IStateTexts } from "./texts";
import modalReducer, { IStateModal } from "./modal";
import zoomReducer, { IStateZoom } from "./zoom";

export interface IState {
  images: IStateImages;
  texts: IStateTexts;
  modal: IStateModal;
  zoom: IStateZoom;
}

const combinedReducers = combineReducers({
  images: imagesReducer,
  texts: textsReducer,
  modal: modalReducer,
  zoom: zoomReducer,
});

export default combinedReducers;

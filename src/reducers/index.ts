import { combineReducers } from "redux";

import imagesReducer, { IStateImages } from "./images";
import zoomReducer, { IStateZoom } from "./zoom";

export interface IState {
  images: IStateImages;
  zoom: IStateZoom;
}

const combinedReducers = combineReducers({
  images: imagesReducer,
  zoom: zoomReducer,
});

export default combinedReducers;

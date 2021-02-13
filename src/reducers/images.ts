import {
  IMAGES_SET_IMAGE,
  IMAGES_SET_EDIT,
  IMAGES_SET_JIMP,
} from "../constants";
import { IAction } from "../actions/images";

const originals = {
  "postcard-1": "./assets/images/postcard-1.jpg",
  "postcard-2": "./assets/images/postcard-2.jpg",
};

export interface IStateImages {
  originals: { [key: string]: string };
  edits: { [key: string]: string };
  jimps: { [key: string]: any };
  current: string;
}

export const initialState: IStateImages = {
  originals,
  edits: {},
  jimps: {},
  current: Object.keys(originals)[0],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case IMAGES_SET_IMAGE:
      return { ...state, current: action.payload.index };
    case IMAGES_SET_EDIT:
      return {
        ...state,
        edits: {
          ...state.edits,
          [action.payload.index]: action.payload.base64,
        },
      };
    case IMAGES_SET_JIMP:
      return {
        ...state,
        jimps: {
          ...state.jimps,
          [action.payload.index]: action.payload.jimp,
        },
      };
    default:
      return state;
  }
};

export default reducer;

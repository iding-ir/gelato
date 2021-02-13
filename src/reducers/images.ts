import { IMAGES_SET_IMAGE, IMAGES_SET_EDIT } from "../constants";
import { IAction } from "../actions/images";

const originals = {
  "postcard-1": "./assets/images/postcard-1.jpg",
  "postcard-2": "./assets/images/postcard-2.jpg",
};

export interface IStateImages {
  originals: { [key: string]: string };
  edits: { [key: string]: string };
  current: string;
}

const initialState: IStateImages = {
  originals,
  edits: {},
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
    default:
      return state;
  }
};

export default reducer;

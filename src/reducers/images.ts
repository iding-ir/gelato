import { IMAGES_SET_IMAGE, IMAGES_SET_BASE64 } from "../constants";
import { IAction } from "../actions/images";

const images = {
  "postcard-1": "./assets/images/postcard-1.jpg",
  "postcard-2": "./assets/images/postcard-2.jpg",
};

export interface IStateImages {
  images: { [key: string]: string };
  base64s: { [key: string]: string };
  current: string;
}

const initialState: IStateImages = {
  images,
  base64s: {},
  current: Object.keys(images)[0],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case IMAGES_SET_IMAGE:
      return { ...state, current: action.payload.index };
    case IMAGES_SET_BASE64:
      return {
        ...state,
        base64s: {
          ...state.base64s,
          [action.payload.index]: action.payload.base64,
        },
      };
    default:
      return state;
  }
};

export default reducer;

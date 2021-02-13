import { IMAGES_SET } from "../constants";
import { IAction } from "../actions/images";

const images = {
  "postcard-1": "./assets/images/postcard-1.jpg",
  "postcard-2": "./assets/images/postcard-2.jpg",
};

export interface IStateImages {
  images: { [key: string]: string };
  current: string;
}

const initialState: IStateImages = {
  images,
  current: Object.keys(images)[0],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case IMAGES_SET:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default reducer;

import { IMAGES_SET } from "../constants";

export interface IAction {
  type: string;
  payload: string;
}

export const setImage = (index: string): IAction => {
  return {
    type: IMAGES_SET,
    payload: index,
  };
};

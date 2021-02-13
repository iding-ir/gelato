import { IMAGES_SET_IMAGE, IMAGES_SET_BASE64 } from "../constants";

export interface IAction {
  type: string;
  payload: { index: string; base64?: string };
}

export const setImage = (index: string): IAction => {
  return {
    type: IMAGES_SET_IMAGE,
    payload: { index },
  };
};

export const setBase64 = (index: string, base64: string): IAction => {
  return {
    type: IMAGES_SET_BASE64,
    payload: { index, base64 },
  };
};

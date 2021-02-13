import {
  IMAGES_SET_IMAGE,
  IMAGES_SET_EDIT,
  IMAGES_SET_JIMP,
} from "../constants";

export interface IAction {
  type: string;
  payload: { index: string; base64?: string; jimp?: any };
}

export const setImage = (index: string): IAction => ({
  type: IMAGES_SET_IMAGE,
  payload: { index },
});

export const setEdit = (index: string, base64: string): IAction => ({
  type: IMAGES_SET_EDIT,
  payload: { index, base64 },
});

export const setJimp = (index: string, jimp: any): IAction => ({
  type: IMAGES_SET_JIMP,
  payload: { index, jimp },
});

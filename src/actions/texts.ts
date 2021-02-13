import { TEXTS_SET_TEXT, TEXTS_ADD_TEXT } from "../constants";

export interface IAction {
  type: string;
  payload: string | [number, number];
}

export const addText = (position: [number, number]): IAction => ({
  type: TEXTS_ADD_TEXT,
  payload: position,
});

export const setText = (text: string): IAction => ({
  type: TEXTS_SET_TEXT,
  payload: text,
});

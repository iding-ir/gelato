import { TEXTS_SET_TEXT } from "../constants";

export interface Text {
  text: string;
  position: [number, number];
}

export interface IAction {
  type: string;
  payload: Text;
}

export const setText = (text: string, position: [number, number]): IAction => {
  return {
    type: TEXTS_SET_TEXT,
    payload: { text, position },
  };
};

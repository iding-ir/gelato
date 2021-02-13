import { TEXTS_ADD } from "../constants";

export interface Text {
  text: string;
  position: [number, number];
}

export interface IAction {
  type: string;
  payload: Text;
}

export const addText = (text: string, position: [number, number]): IAction => {
  return {
    type: TEXTS_ADD,
    payload: { text, position },
  };
};

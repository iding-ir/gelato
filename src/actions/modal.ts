import { MODAL_SHOW, MODAL_HIDE } from "../constants";

export interface Text {
  text: string;
}

export interface IAction {
  type: string;
}

export const showModal = (): IAction => {
  return {
    type: MODAL_SHOW,
  };
};

export const hideModal = (): IAction => {
  return {
    type: MODAL_HIDE,
  };
};

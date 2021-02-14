import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../constants";

export interface IAction {
  type: string;
}

export const zoomIn = (): IAction => ({
  type: ZOOM_IN,
});

export const zoomOut = (): IAction => ({
  type: ZOOM_OUT,
});

export const zoomReset = (): IAction => ({
  type: ZOOM_RESET,
});

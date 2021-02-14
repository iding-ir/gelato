import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../constants";
import { IAction } from "../actions/zoom";

export interface IStateZoom {
  current: number;
}

export const initialState: IStateZoom = {
  current: 0,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ZOOM_IN:
      return {
        ...state,
        current: state.current < 5 ? state.current + 1 : state.current,
      };
    case ZOOM_OUT:
      return {
        ...state,
        current: state.current > -5 ? state.current - 1 : state.current,
      };
    case ZOOM_RESET:
      return {
        ...state,
        current: 0,
      };
    default:
      return state;
  }
};

export default reducer;

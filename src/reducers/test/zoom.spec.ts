import { IAction } from "../../actions/zoom";
import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../../constants";
import reducer, { initialState, IStateZoom } from "../zoom";

describe("Reducer: zoom:", () => {
  it("should return the initial state", () => {
    const expectedState: IStateZoom = {
      current: 0,
    };

    expect(reducer(undefined, {} as IAction)).toEqual(expectedState);
  });

  it("should increase zoom", () => {
    const action: IAction = {
      type: ZOOM_IN,
    };

    const state: IStateZoom = {
      ...initialState,
      current: 0,
    };

    const expectedState: IStateZoom = {
      ...initialState,
      current: 1,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should decrease zoom", () => {
    const action: IAction = {
      type: ZOOM_OUT,
    };

    const state: IStateZoom = {
      ...initialState,
      current: 0,
    };

    const expectedState: IStateZoom = {
      ...initialState,
      current: -1,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should reset zoom", () => {
    const action: IAction = {
      type: ZOOM_RESET,
    };

    const state: IStateZoom = {
      ...initialState,
      current: 2,
    };

    const expectedState: IStateZoom = {
      ...initialState,
      current: 0,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});

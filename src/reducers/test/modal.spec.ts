import { IAction } from "../../actions/modal";
import { MODAL_SHOW, MODAL_HIDE } from "../../constants";
import reducer, { initialState, IStateModal } from "../modal";

describe("Reducer: modal:", () => {
  it("should return the initial state", () => {
    const expectedState: IStateModal = {
      visibility: false,
    };

    expect(reducer(undefined, {} as IAction)).toEqual(expectedState);
  });

  it("should show modal", () => {
    const action: IAction = {
      type: MODAL_SHOW,
    };

    const state: IStateModal = {
      ...initialState,
      visibility: false,
    };

    const expectedState: IStateModal = {
      ...initialState,
      visibility: true,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should hide modal", () => {
    const action: IAction = {
      type: MODAL_HIDE,
    };

    const state: IStateModal = {
      ...initialState,
      visibility: true,
    };

    const expectedState: IStateModal = {
      ...initialState,
      visibility: false,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});

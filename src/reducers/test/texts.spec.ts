import { IAction } from "../../actions/texts";
import { TEXTS_SET_TEXT, TEXTS_ADD_TEXT } from "../../constants";
import reducer, { initialState, IStateTexts } from "../texts";

describe("Reducer: texts:", () => {
  it("should return the initial state", () => {
    const expectedState: IStateTexts = {
      text: "SUNNY DAY",
      position: [0, 0],
    };

    expect(reducer(undefined, {} as IAction)).toEqual(expectedState);
  });

  it("should set text", () => {
    const action: IAction = {
      type: TEXTS_SET_TEXT,
      payload: "RAINY DAY",
    };

    const state: IStateTexts = {
      ...initialState,
      text: "SUNNY DAY",
    };

    const expectedState: IStateTexts = {
      ...initialState,
      text: "RAINY DAY",
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should add text", () => {
    const action: IAction = {
      type: TEXTS_ADD_TEXT,
      payload: [100, 100],
    };

    const state: IStateTexts = {
      ...initialState,
      position: [10, 10],
    };

    const expectedState: IStateTexts = {
      ...initialState,
      position: [100, 100],
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});

import { IAction } from "../../actions/images";
import { IMAGES_SET_IMAGE, IMAGES_SET_EDIT } from "../../constants";
import reducer, { initialState, IStateImages } from "../images";

describe("Reducer: images:", () => {
  it("should return the initial state", () => {
    const originals = {
      "postcard-1": "./assets/images/postcard-1.jpg",
      "postcard-2": "./assets/images/postcard-2.jpg",
    };

    const expectedState: IStateImages = {
      originals,
      edits: {},
      jimps: {},
      current: "postcard-1",
    };

    expect(reducer(undefined, {} as IAction)).toEqual(expectedState);
  });

  it("should set image", () => {
    const action: IAction = {
      type: IMAGES_SET_IMAGE,
      payload: { index: "image-2" },
    };

    const state: IStateImages = {
      ...initialState,
      current: "image-1",
    };

    const expectedState: IStateImages = {
      ...initialState,
      current: "image-2",
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set editted image", () => {
    const index = "image-1";
    const base64 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

    const action: IAction = {
      type: IMAGES_SET_EDIT,
      payload: { index, base64 },
    };

    const state: IStateImages = {
      ...initialState,
      edits: {},
    };

    const expectedState: IStateImages = {
      ...initialState,
      edits: { [index]: base64 },
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});

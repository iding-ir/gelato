import { zoomIn, zoomOut, zoomReset, IAction } from "../zoom";
import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET } from "../../constants";

describe("Actions: zoom", () => {
  it(`zoomIn() should return ${ZOOM_IN}`, () => {
    const expectedOutput: IAction = {
      type: ZOOM_IN,
    };

    expect(zoomIn()).toEqual(expectedOutput);
  });

  it(`zoomOut() should return ${ZOOM_OUT}`, () => {
    const expectedOutput: IAction = {
      type: ZOOM_OUT,
    };

    expect(zoomOut()).toEqual(expectedOutput);
  });

  it(`zoomReset() should return ${ZOOM_RESET}`, () => {
    const expectedOutput: IAction = {
      type: ZOOM_RESET,
    };

    expect(zoomReset()).toEqual(expectedOutput);
  });
});

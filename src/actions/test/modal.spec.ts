import { showModal, hideModal, IAction } from "../modal";
import { MODAL_SHOW, MODAL_HIDE } from "../../constants";

describe("Actions: modal", () => {
  it(`showModal() should return ${MODAL_SHOW}`, () => {
    const expectedOutput: IAction = {
      type: MODAL_SHOW,
    };

    expect(showModal()).toEqual(expectedOutput);
  });

  it(`hideModal() should return ${MODAL_HIDE}`, () => {
    const expectedOutput: IAction = {
      type: MODAL_HIDE,
    };

    expect(hideModal()).toEqual(expectedOutput);
  });
});

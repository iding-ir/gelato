import { addText, setText, IAction } from "../texts";
import { TEXTS_SET_TEXT, TEXTS_ADD_TEXT } from "../../constants";

describe("Actions: texts", () => {
  it(`addText() should return ${TEXTS_ADD_TEXT}`, () => {
    const position: [number, number] = [10, 10];

    const expectedOutput: IAction = {
      type: TEXTS_ADD_TEXT,
      payload: position,
    };

    expect(addText(position)).toEqual(expectedOutput);
  });

  it(`setText() should return ${TEXTS_SET_TEXT}`, () => {
    const text = "SUNNY DAY";

    const expectedOutput: IAction = {
      type: TEXTS_SET_TEXT,
      payload: text,
    };

    expect(setText(text)).toEqual(expectedOutput);
  });
});

import { setImage, setEdit, IAction } from "../images";
import { IMAGES_SET_IMAGE, IMAGES_SET_EDIT } from "../../constants";

describe("Actions: images", () => {
  it(`setImage() should return ${IMAGES_SET_IMAGE}`, () => {
    const index = "image-1";

    const expectedOutput: IAction = {
      type: IMAGES_SET_IMAGE,
      payload: { index },
    };

    expect(setImage(index)).toEqual(expectedOutput);
  });

  it(`setEdit() should return ${IMAGES_SET_EDIT}`, () => {
    const index = "image-1";
    const base64 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

    const expectedOutput: IAction = {
      type: IMAGES_SET_EDIT,
      payload: { index, base64 },
    };

    expect(setEdit(index, base64)).toEqual(expectedOutput);
  });
});

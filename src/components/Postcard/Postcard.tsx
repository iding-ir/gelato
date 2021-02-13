import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jimp from "jimp";

import "./Postcard.scss";
import { IState } from "../../reducers";
import { setEdit } from "../../actions/images";

const Postcard = () => {
  const dispatch = useDispatch();

  const edits = useSelector((state: IState) => state.images.edits);
  const originals = useSelector((state: IState) => state.images.originals);
  const current = useSelector((state: IState) => state.images.current);
  const text = useSelector((state: IState) => state.texts.text);
  const position = useSelector((state: IState) => state.texts.position);

  useEffect(() => {
    let loadedImage: any;

    Jimp.read(edits[current] || originals[current])
      .then((image) => {
        loadedImage = image;

        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      })
      .then((font) => {
        if (text && position) {
          loadedImage = loadedImage.print(font, position[0], position[1], text);
        }

        loadedImage.getBase64(Jimp.AUTO, (error: Error, data: string) => {
          dispatch(setEdit(current, data));
        });
      })
      .catch((error: Error) => {
        throw error;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const renderImage = () => {
    return (
      <img
        src={edits[current] || originals[current]}
        alt={current}
        data-component-name={`full-${current}`}
      />
    );
  };

  return <div className="Postcard">{renderImage()}</div>;
};

export default Postcard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jimp from "jimp";

import "./Postcard.scss";
import { IState } from "../../reducers";
import { setBase64 } from "../../actions/images";

const Postcard = () => {
  const dispatch = useDispatch();

  const base64s = useSelector((state: IState) => state.images.base64s);
  const images = useSelector((state: IState) => state.images.images);
  const current = useSelector((state: IState) => state.images.current);
  const text = useSelector((state: IState) => state.texts.text);

  useEffect(() => {
    let loadedImage: any;

    Jimp.read(base64s[current] || images[current])
      .then((image) => {
        loadedImage = image;

        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      })
      .then((font) => {
        if (text) {
          loadedImage = loadedImage.print(
            font,
            text.position[0],
            text.position[1],
            text.text
          );
        }

        loadedImage.getBase64(Jimp.AUTO, (err: any, data: any) => {
          dispatch(setBase64(current, data));
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, text]);

  const renderImage = () => {
    return <img src={base64s[current] || images[current]} alt="postcard" />;
  };

  return <div className="Postcard">{renderImage()}</div>;
};

export default Postcard;

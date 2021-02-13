import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Jimp from "jimp";

import "./Postcard.scss";
import { IState } from "../../reducers";
import { Text } from "../../actions/texts";

const Postcard = () => {
  const images = useSelector((state: IState) => state.images.images);
  const current = useSelector((state: IState) => state.images.current);
  const texts = useSelector((state: IState) => state.texts.texts);

  const [b64Image, setB64Image] = useState();

  useEffect(() => {
    let loadedImage: any;

    Jimp.read(images[current])
      .then((image) => {
        loadedImage = image;

        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      })
      .then((font) => {
        texts.forEach((text: Text, index: number) => {
          loadedImage = loadedImage.print(
            font,
            text.position[0],
            text.position[1],
            text.text
          );
        });

        loadedImage.getBase64(Jimp.AUTO, (err: any, data: any) => {
          setB64Image(data);
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, texts]);

  const renderImage = () => {
    return b64Image && <img src={b64Image} alt="postcard" />;
  };

  return <div className="Postcard">{renderImage()}</div>;
};

export default Postcard;

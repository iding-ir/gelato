import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Jimp from "jimp";

import "./Sidebar.scss";
import { IState } from "../../reducers";
import { setText } from "../../actions/texts";
import { setBase64 } from "../../actions/images";

const Sidebar = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const base64s = useSelector((state: IState) => state.images.base64s);
  const images = useSelector((state: IState) => state.images.images);
  const current = useSelector((state: IState) => state.images.current);

  const insertText = () => {
    dispatch(setText("SUNNY DAY", [Math.random() * 500, Math.random() * 500]));
  };

  const zoomIn = () => {
    Jimp.read(base64s[current]).then((image) => {
      console.log(image.bitmap.width / 4);

      image
        .resize(image.bitmap.width * 2, image.bitmap.height * 2)
        .quality(100)
        .crop(
          image.bitmap.width / 4,
          image.bitmap.height / 4,
          image.bitmap.width / 2,
          image.bitmap.height / 2
        )
        .getBase64("image/jpeg", (err, data) => {
          dispatch(setBase64(current, data));
        });
    });
  };

  return (
    <div className="Sidebar">
      <button onClick={insertText}>{t("sidebar.nextBlock")}</button>

      <button onClick={zoomIn}>{t("sidebar.zoomIn")}</button>

      <button>{t("sidebar.zoomOut")}</button>

      <button>{t("sidebar.rotate")}</button>
    </div>
  );
};

export default Sidebar;

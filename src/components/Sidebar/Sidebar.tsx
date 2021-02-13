import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Jimp from "jimp";

import "./Sidebar.scss";
import { IState } from "../../reducers";
import { setText } from "../../actions/texts";
import { setEdit } from "../../actions/images";

const Sidebar = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const edits = useSelector((state: IState) => state.images.edits);
  const current = useSelector((state: IState) => state.images.current);

  const insertText = () => {
    Jimp.read(edits[current]).then((image) => {
      dispatch(
        setText("SUNNY DAY", [
          Math.random() * image.bitmap.width,
          Math.random() * image.bitmap.height,
        ])
      );
    });
  };

  const zoomIn = () => {
    Jimp.read(edits[current]).then((image) => {
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
          dispatch(setEdit(current, data));
        });
    });
  };

  const zoomOut = () => {
    Jimp.read(edits[current]).then((image) => {
      image
        .resize(image.bitmap.width / 2, image.bitmap.height / 2)
        .quality(100)
        .getBase64("image/jpeg", (err, data) => {
          dispatch(setEdit(current, data));
        });
    });
  };

  const rotate = () => {
    Jimp.read(edits[current]).then((image) => {
      image.rotate(90).getBase64("image/jpeg", (err, data) => {
        dispatch(setEdit(current, data));
      });
    });
  };

  return (
    <div className="Sidebar">
      <button onClick={insertText}>{t("sidebar.nextBlock")}</button>

      <button onClick={zoomIn}>{t("sidebar.zoomIn")}</button>

      <button onClick={zoomOut}>{t("sidebar.zoomOut")}</button>

      <button onClick={rotate}>{t("sidebar.rotate")}</button>
    </div>
  );
};

export default Sidebar;

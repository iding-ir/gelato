import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Jimp from "jimp";
import clsx from "clsx";

import "./Sidebar.scss";
import { IState } from "../../reducers";
import { setText, addText } from "../../actions/texts";
import { setEdit } from "../../actions/images";
import { showModal, hideModal } from "../../actions/modal";

const Sidebar = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const originals = useSelector((state: IState) => state.images.originals);
  const edits = useSelector((state: IState) => state.images.edits);
  const current = useSelector((state: IState) => state.images.current);
  const modalVisibility = useSelector(
    (state: IState) => state.modal.visibility
  );

  const handleInsertText = () => {
    dispatch(hideModal());

    Jimp.read(edits[current] || originals[current])
      .then((image) => {
        dispatch(
          addText([
            Math.round(Math.random() * image.bitmap.width - 50),
            Math.round(Math.random() * image.bitmap.height - 50),
          ])
        );
      })
      .catch((error: Error) => {
        throw error;
      });
  };

  const handleZoomIn = () => {
    Jimp.read(edits[current])
      .then((image) => {
        image
          .resize(image.bitmap.width * 2, image.bitmap.height * 2)
          .quality(100)
          .crop(
            image.bitmap.width / 4,
            image.bitmap.height / 4,
            image.bitmap.width / 2,
            image.bitmap.height / 2
          )
          .getBase64("image/jpeg", (error, data) => {
            dispatch(setEdit(current, data));
          });
      })
      .catch((error: Error) => {
        throw error;
      });
  };

  const handleZoomOut = () => {
    Jimp.read(edits[current])
      .then((image) => {
        image
          .resize(image.bitmap.width / 2, image.bitmap.height / 2)
          .quality(100)
          .getBase64("image/jpeg", (error, data) => {
            dispatch(setEdit(current, data));
          });
      })
      .catch((error: Error) => {
        throw error;
      });
  };

  const handleRotate = () => {
    Jimp.read(edits[current])
      .then((image) => {
        image.rotate(90).getBase64("image/jpeg", (error, data) => {
          dispatch(setEdit(current, data));
        });
      })
      .catch((error: Error) => {
        throw error;
      });
  };

  const handleSetText = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setText(event.target.value));
  };

  const handleClickInput = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleClickOverlay = () => {
    dispatch(hideModal());
  };

  const modalClassnames = clsx("overlay", {
    visible: modalVisibility,
  });

  return (
    <div className="Sidebar">
      <button onClick={() => dispatch(showModal())}>
        {t("sidebar.nextBlock")}
      </button>

      <button onClick={handleZoomIn}>{t("sidebar.zoomIn")}</button>

      <button onClick={handleZoomOut}>{t("sidebar.zoomOut")}</button>

      <button onClick={handleRotate}>{t("sidebar.rotate")}</button>

      <div onClick={handleClickOverlay} className={modalClassnames}>
        <div className="wrapper">
          <input
            type="text"
            onClick={handleClickInput}
            onBlur={handleSetText}
            placeholder={t("modal.placeholder")}
          />

          <button onClick={handleInsertText}>{t("modal.submit")}</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

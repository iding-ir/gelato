import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import "./Sidebar.scss";
import { IState } from "../../reducers";
import { setText } from "../../actions/texts";

const Sidebar = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const images = useSelector((state: IState) => state.images.images);

  const insertText = () => {
    dispatch(setText("SUNNY DAY", [Math.random() * 500, Math.random() * 500]));
  };

  return (
    <div className="Sidebar">
      <button onClick={insertText}>{t("sidebar.nextBlock")}</button>

      <button>{t("sidebar.zoomIn")}</button>

      <button>{t("sidebar.zoomOut")}</button>

      <button>{t("sidebar.rotate")}</button>
    </div>
  );
};

export default Sidebar;

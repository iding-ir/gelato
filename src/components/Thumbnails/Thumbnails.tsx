import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Thumbnails.scss";
import { IState } from "../../reducers";
import { setImage } from "../../actions/images";
import { setText } from "../../actions/texts";

const Thumbnails = () => {
  const dispatch = useDispatch();

  const images = useSelector((state: IState) => state.images.images);
  const base64s = useSelector((state: IState) => state.images.base64s);

  const onClick = (image: string) => {
    dispatch(setImage(image));

    dispatch(setText("", [0, 0]));
  };

  const renderThumbnails = () =>
    Object.keys(images).map((image: string) => (
      <img
        key={image}
        src={base64s[image] || images[image]}
        alt={image}
        onClick={() => onClick(image)}
      />
    ));

  return (
    <div className="Thumbnails">
      <div className="wrapper">{renderThumbnails()}</div>
    </div>
  );
};

export default Thumbnails;

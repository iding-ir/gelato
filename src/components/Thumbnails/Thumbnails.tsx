import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Thumbnails.scss";
import { IState } from "../../reducers";
import { setImage } from "../../actions/images";

const Thumbnails = () => {
  const dispatch = useDispatch();

  const images = useSelector((state: IState) => state.images.images);

  const onClick = (image: string) => {
    dispatch(setImage(image));
  };

  const renderThumbnails = () =>
    Object.keys(images).map((image: string) => (
      <img
        key={image}
        src={images[image]}
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

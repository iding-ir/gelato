import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Thumbnails.scss";
import { IState } from "../../reducers";
import { setImage } from "../../actions/images";

const Thumbnails = () => {
  const dispatch = useDispatch();

  const originals = useSelector((state: IState) => state.images.originals);
  const edits = useSelector((state: IState) => state.images.edits);

  const onClick = (image: string) => {
    dispatch(setImage(image));
  };

  const renderThumbnails = () =>
    Object.keys(originals).map((image: string) => (
      <img
        key={image}
        src={edits[image] || originals[image]}
        alt={image}
        data-component-name={`thumb-${image}`}
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

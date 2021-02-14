import React from "react";
import { useSelector } from "react-redux";

import "./Postcard.scss";
import { IState } from "../../reducers";

const Postcard = () => {
  const edits = useSelector((state: IState) => state.images.edits);
  const originals = useSelector((state: IState) => state.images.originals);
  const current = useSelector((state: IState) => state.images.current);
  const currentZoom = useSelector((state: IState) => state.zoom.current);

  const renderImage = () => {
    return (
      <img
        src={edits[current] || originals[current]}
        alt={current}
        data-component-name={`full-${current}`}
        style={{
          transform: `translate(-50%, -50%) scale(${1 + 0.1 * currentZoom})`,
        }}
      />
    );
  };

  return <div className="Postcard">{renderImage()}</div>;
};

export default Postcard;

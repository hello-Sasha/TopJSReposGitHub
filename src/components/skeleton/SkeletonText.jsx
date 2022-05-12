import React from "react";
import "./SkeletonText.css";
import classNames from "classnames";

export const SkeletonText = ({ rowsCount = 1, widthRow='100%', subheader="" }) => {
  let rows = [];
  for (let i = 0; i < rowsCount; i++) {
    rows.push(
      <span key={i} className={classNames("skeleton-text__row", subheader)} style={{width: widthRow}} />
    );
  }
  return <div className="skeleton-text">{rows}</div>;
};

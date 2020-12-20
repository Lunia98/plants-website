import React from "react";

import "./Plant.css";

export default function Plants({
  imgPlant,
  index,
  text,
  description,
  classname,
}) {
  return (
    <div
      className={
        classname !== undefined
          ? classname + " Container__Unique__Plant"
          : "pos" + index + " Container__Plant Flex__Plant"
      }
    >
      <p className="Plant__Text">{text}</p>
      <p
        className={index === 1 ? "Description__Enable" : "Description__Disable"}
      >
        {description}
      </p>
      <img className="Image__Plant" src={imgPlant} alt="..." />
    </div>
  );
}

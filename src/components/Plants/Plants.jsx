import React from "react";

import "./Plants.css";

export default function Plants({ imgPlant }) {
  return (
    <div className="Container__Plants Flex__Plant">
      <img className="Image__Plant" src={imgPlant} alt="..." />
    </div>
  );
}

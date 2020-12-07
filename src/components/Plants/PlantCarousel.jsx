import React, { useState } from "react";
import Plants from "./Plants";

import plant1 from "../../img/plant1.png";
import plant2 from "../../img/plant2.png";
import plant3 from "../../img/plant3.png";
import plant4 from "../../img/plant4.png";
import plant5 from "../../img/plant5.png";
import "./PlantCarousel.css";

export default function PlantCarousel() {
  var arrayPlants = [plant1, plant2, plant3, plant4, plant5];

  return (
    <div
      className="Transition__Plants"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {arrayPlants.map((plant, i) => {
        return <Plants imgPlant={plant} key={i} />;
      })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import { arrayPlants } from "../../data";

import "./PlantsCarousel.css";

export default function PlantCarousel() {
  const [state, setState] = useState(0);

  useEffect(() => {
    let id = setTimeout(() => {
      setState(state > 0 ? state - 1 : arrayPlants.length - 1);
    }, 3500);
    return () => {
      clearTimeout(id);
    };
  }, [state]);

  return (
    <div className="Transition__Plants">
      {arrayPlants.map((plant, i) => {
        return (
          <Plant
            imgPlant={plant.img}
            text={plant.text}
            description={plant.description}
            key={i}
            index={
              state + i < arrayPlants.length
                ? state + i
                : state + i - arrayPlants.length
            }
          />
        );
      })}
    </div>
  );
}

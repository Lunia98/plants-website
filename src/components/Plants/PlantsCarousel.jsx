import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import { arrayPlants } from "../../data";
import { arrowLeft, arrowRight } from "../Utils/icons";
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

  const handleClickRight = () => {
    setState(state > 0 ? state - 1 : arrayPlants.length - 1);
  };
  const handleClickLeft = () => {
    setState(state < 6 ? state + 1 : 0);
  };

  return (
    <div className="Container__Transition__Plants">
      <button
        onClick={() => handleClickRight()}
        className="Button__Arrow Arrow__Right"
      >
        {arrowRight()}
      </button>
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
      <button
        onClick={() => handleClickLeft()}
        className="Button__Arrow Arrow__Left"
      >
        {arrowLeft()}
      </button>
    </div>
  );
}

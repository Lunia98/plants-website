import React from "react";
import "./Title.css";
export default function Title({ size }) {
  return (
    <div className="Container__Title">
      <h4 className="go_green">Go green.</h4>
      <div className="Flex__Title">
        <h1 className="Title">The World of plants</h1>
        {size.width > 750 && (
          <p className="Describe">
            Discover everything you need to know about your plants, treat them
            with kindness and they will take care of you.
          </p>
        )}
      </div>
    </div>
  );
}

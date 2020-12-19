import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./NavResponsive.css";

export default function NavResponsive({ size }) {
  const [showElements, setShowElements] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {size.width < 750 && (
        <button
          className="button__nav"
          onClick={() => setShowElements(!showElements)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            fill="currentColor"
            class="bi bi-caret-down"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
            />
          </svg>
        </button>
      )}
      {showElements && <Nav />}
    </div>
  );
}

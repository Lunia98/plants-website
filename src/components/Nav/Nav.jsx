import React from "react";
import "./Nav.css";
import { person, cart } from "../Utils/icons";
export default function Nav() {
  return (
    <ul className="nav">
      <li>Home</li>
      <li>Plant finder</li>
      <li>Products</li>
      <li>About us</li>
      <li>Contact</li>
      <li>My plants</li>
      {person()}
      {cart()}
    </ul>
  );
}

import React from "react";
import { NavLink } from "react-router";

function Menu({ text, path = '#' }) {
  return (
    <NavLink
      to={`/${path}`}
      className=" text-white font-medium rounded-lg transition duration-200 focus:outline-none cursor-pointer active:scale-95 "
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default Menu;

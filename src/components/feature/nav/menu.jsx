import React from "react";

function Menu({ text }) {
  return (
    <div className=" text-white font-medium rounded-lg transition duration-200 focus:outline-none cursor-pointer active:scale-95 ">
      <span>{text}</span>
    </div>
  );
}

export default Menu;

import React from "react";

function InfoMenuButton({ text, active, ...props }) {
  return (
    <span
      {...props}
      className={`flex-1 text-center px-1 py-2 text-sm cursor-pointer whitespace-nowrap ${
        active ? "text-secondary-0" : "text-text-0"
      }`}
    >
      {text}
    </span>
  );
}

export default InfoMenuButton;

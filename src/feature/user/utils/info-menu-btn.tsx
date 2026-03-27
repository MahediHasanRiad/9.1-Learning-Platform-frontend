import React from "react";

interface InfoMenuButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active: boolean;
}

function InfoMenuButton({ text, active, ...props }: InfoMenuButtonType) {
  return (
    <span
      {...props}
      className={`flex-1 text-center px-1 py-2 text-xs md:text-sm cursor-pointer whitespace-nowrap ${
        active ? "text-secondary-0" : "text-text-0"
      }`}
    >
      {text}
    </span>
  );
}

export default InfoMenuButton;

import React from "react";
import { Link } from "react-router";

function MenuItem({ Icon, text, className, ...props }) {
  return (
    <Link to={``}>
      <div
        className={`hover:text-secondary-0 hover:bg-secondary-0/10 hover:w-2/3 hover:rounded-md p-2 cursor-pointer ${className}`}
        {...props}
      >
        <span className="flex items-center">
          <Icon size={18} className={"mx-2"} /> {text}
        </span>
      </div>
    </Link>
  );
}

export default MenuItem;

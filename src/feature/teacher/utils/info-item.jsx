import React from "react";

function InfoItem({ name, description }) {
  return (
    <div>
      <span className="font-medium text-text-0">
        <b>{name}:</b>
      </span>
      {description}
    </div>
  );
}

export default InfoItem;

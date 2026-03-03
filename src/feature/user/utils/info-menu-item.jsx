import React from "react";

function InfoMenuItem({ Icon, text }) {
  return (
    <p className="flex item-center space-y-2 mt-1">
      <Icon className='mx-2' size={18} />
      {text}
    </p>
  );
}

export default InfoMenuItem;

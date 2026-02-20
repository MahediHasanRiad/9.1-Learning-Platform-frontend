import React from "react";

function Image({image, alt = ''}) {
  return (
    <div className="flex justify-center md:justify-start">
      <img
        src={image}
        alt={alt}
        className="w-32 h-32 rounded-full object-cover border-4 border-primary-0"
      />
    </div>
  );
}

export default Image;

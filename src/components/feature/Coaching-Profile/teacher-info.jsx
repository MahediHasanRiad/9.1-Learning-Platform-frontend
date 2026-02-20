import React from "react";
import { Link } from "react-router";

function TeacherInfo({ path, image, name, subject, rating }) {
  return (
    <div className="flex-row justify-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition cursor-pointer">
      
      {/* Profile Image */}
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-2 ring-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <Link to={`/${path}`} className="font-medium text-sm text-secondary-0 lg:text-base">{name}</Link>
        
        {subject && (
          <span className="text-xs lg:text-sm text-gray-500">
            {subject}
          </span>
        )}

        {rating && (
          <span className="text-xs text-yellow-500">
            ⭐ {rating}
          </span>
        )}
      </div>
    </div>
  );
}

export default TeacherInfo;
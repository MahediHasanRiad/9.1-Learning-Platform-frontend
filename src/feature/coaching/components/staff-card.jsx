import React from "react";
import { Link } from "react-router";

function StaffCard({ path = "#", img, name, role }) {
  return (
    <Link
      to={`/${path}`}
      className="group block w-full border border-gray-200 rounded-xl p-3 hover:border-primary-0 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      {/* Centered Image */}
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-transparent group-hover:border-primary-0 transition-all"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <p className="font-bold text-gray-800 text-lg group-hover:text-primary-600 transition-colors">
          {name}
        </p>
        <p className="text-sm text-gray-500 font-medium italic">{role}</p>
      </div>

      {/* The "Hidden" Footer - Now it will show up on hover! */}
      <div className="mt-4 pt-3 border-t border-gray-50 text-center text-xs font-bold text-text-0 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        VIEW PROFILE →
      </div>
    </Link>
  );
}

export default StaffCard;

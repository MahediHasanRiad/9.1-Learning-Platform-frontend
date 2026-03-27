import React from "react";
import { Link } from "react-router";

interface StaffCardType {
  path: string;
  img: string;
  name: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

function StaffCard({ path = "#", img, name, role }: StaffCardType) {
  return (
    <Link
      to={`${path}`}
      className="group block w-full border border-gray-200 rounded-xl p-3 hover:border-secondary-0 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Centered Image */}
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-transparent group-hover:border-secondary-0 transition-all"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <p className="font-bold text-text-0 text-md md:text-md lg:text-lg group-hover:text-secondary-0 transition-colors shrink-0">
          {name}
        </p>
        <p className="text-xs md:text-md text-gray-500 font-medium italic">{role}</p>
      </div>
    </Link>
  );
}

export default StaffCard;

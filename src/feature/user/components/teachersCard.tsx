import React from "react";
import { Link } from "react-router";

interface TeacherCardType {
  image: string;
  name: string;
  path: string;
}

function TeacherCard({ image, name, path = '#' }: TeacherCardType) {
  return (
    <section className="flex flex-col items-center">
      <img
        src={image}
        alt="image"
        className="rounded-full w-15 h-15 border object-cover"
      />
      <Link to={path}>
        <p className="hover:text-secondary-0">{name}</p>
      </Link>
    </section>
  );
}

export default TeacherCard;

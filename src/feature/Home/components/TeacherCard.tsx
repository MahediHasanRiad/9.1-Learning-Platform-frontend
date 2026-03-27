import { Link } from "react-router";
import { GraduationCap, Star } from "lucide-react";
import type { TeacherCardType } from "@/feature/auth/auth-type";


function CardItem({
  path = "#",
  image,
  name,
  education,
  rating,
  btnText = " View Profile...",
}: TeacherCardType) {

  return (
    <Link to={`${path}`} className="block w-full h-36">
      <section className="h-36 flex bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all group">
        {/* Left Side: Image */}
        <div className="w-1/3 h-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div className="space-y-1">
            {/* Title */}
            <h3 className="text-[15px] font-bold text-gray-900 line-clamp-1 leading-tight">
              {name}
            </h3>

            {/* Education */}
            <div className="flex items-center gap-1.5 text-gray-500">
              <GraduationCap size={13} />
              <p className="text-[11px] font-medium truncate">{education}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[11px]">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-gray-800">{rating}</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>

          {/* Simple Modern Button */}
          <div className="flex justify-end">
            <button className="bg-primary-0 text-white text-[11px] font-semibold px-5 py-1.5 rounded-lg hover:bg-secondary-0 active:scale-95 transition-all shadow-sm">
              {btnText}
            </button>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default CardItem;

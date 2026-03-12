import { SingleTeacherAsyncThunk } from "@/feature/teacher/redux/single-teacher.thunk";
import Button from "@/shared/utils/button";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

function CardItem({
  path = "#",
  image,
  name,
  education,
  rating,
  btnText = "View Profile...",
}) {

  const dispatch = useDispatch()

  return (
    <Link to={`${path}`} className="block w-full max-w-lg">
      <section className="h-36 flex bg-background-0 border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-0  transition-shadow">
        {/* Left Side: Image  */}
        <div className="w-1/3 h-full">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div className="space-y-0.5">
            {/* Title */}
            <p className="text-base font-bold text-gray-800 line-clamp-1 leading-tight">
              {name}
            </p>

            {/* Education */}
            <p className="text-xs text-gray-500 font-medium truncate">
              🎓 {education}
            </p>

            {/* Rating */}
            <p className="text-xs text-primary-0 font-semibold flex items-center gap-1">
              ⭐ {rating}{" "}
              <span className="text-gray-400 font-normal">Rating</span>
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              text={btnText}
              bg="background-0"
              textColor="secondary-0"
              className="text-xs py-1.5 px-3 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-all rounded-lg border border-gray-100 active:scale-95"
            />
          </div>
        </div>
      </section>
    </Link>
  );
}

export default CardItem;

import { Link } from "react-router";

function EnrolledCard({ path = '#', batchName, duration, status }) {
  return (
    <Link to={`/${path}`} className="flex justify-between items-center border-b border-gray-200 p-2">
      <div className=" ">
        <p className="line-clamp-1 font-semibold">{batchName}</p>
        <p className="line-clamp-1 text-xs text-gray-500">{duration}</p>
      </div>
      <div className="line-clamp-1">
        <span
          className={`${status === "running" ? "text-primary-0" : "text-red-500"}`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
}

export default EnrolledCard;

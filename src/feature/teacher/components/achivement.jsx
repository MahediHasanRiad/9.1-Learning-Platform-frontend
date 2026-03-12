import {
  Award,
  ShieldCheck,
  Calendar1,
  Clock7,
} from "lucide-react";

function Achivement({ user }) {
  return (
    <section className="space-y-3 mt-5 p-4">
      {/* Experience */}
      <div className="flex items-center text-sm group">
        <Award
          className="mr-3 text-gray-400 group-hover:text-blue-500 transition-colors"
          size={18}
        />
        <span className="text-gray-500 font-medium">Experience:</span>
        <span className="ml-2 text-gray-800 font-semibold">
          {user?.experience}
        </span>
      </div>

      {/* Certificates */}
      <div className="flex items-center text-sm group">
        <ShieldCheck
          className="mr-3 text-gray-400 group-hover:text-green-500 transition-colors"
          size={18}
        />
        <span className="text-gray-500 font-medium">Certificates:</span>
        <div className="ml-2 flex flex-wrap gap-1">
          {user?.certificate?.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[12px] border border-gray-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Available Day */}
      <div className="flex items-center text-sm group">
        <Calendar1
          className="mr-3 text-gray-400 group-hover:text-purple-500 transition-colors"
          size={18}
        />
        <span className="text-gray-500 font-medium">Available Day:</span>
        <span className="ml-2 text-gray-800 font-semibold">
          {user?.availableDay}
        </span>
      </div>

      {/* Available Time */}
      <div className="flex items-center text-sm group">
        <Clock7
          className="mr-3 text-gray-400 group-hover:text-orange-500 transition-colors"
          size={18}
        />
        <span className="text-gray-500 font-medium">Available Time:</span>
        <span className="ml-2 text-gray-800 font-semibold">
          {user?.availableTime}
        </span>
      </div>
    </section>
  );
}

export default Achivement;

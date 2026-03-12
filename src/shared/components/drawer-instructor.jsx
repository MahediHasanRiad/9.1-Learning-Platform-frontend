import React from "react";

function DrawerInstructor({ assignedTeachers }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {assignedTeachers?.map((teacher, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-slate-50 p-1.5 pr-3 rounded-full border border-slate-100 hover:border-primary-0/30 transition-all"
        >
          <span className="text-xs font-bold text-slate-700 truncate">
            {teacher.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DrawerInstructor;

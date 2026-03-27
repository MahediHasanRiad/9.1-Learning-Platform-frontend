import { Book } from "lucide-react";
import React from "react";

interface Subjects {
  _id: string;
  name: string;
  className: string;
}

interface SubjectsType {
  subjects: Subjects[]
}

function DrawerSubject({subjects}: SubjectsType) {
  
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-600">
          <Book size={20} className="text-primary-0" strokeWidth={2} />
        </div>
        <div className="w-[1px] h-full bg-slate-100 my-1" />
      </div>
      <div className="pt-1">
        <p className="text-sm font-bold text-slate-800 mb-2">Key Subjects</p>
        <div className="flex flex-wrap gap-2">
          {subjects?.map((sub) => (
            <span
              key={sub._id}
              className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-semibold rounded-full"
            >
              {sub.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrawerSubject;

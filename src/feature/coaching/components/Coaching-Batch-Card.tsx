import { BookOpen, Calendar, ChevronRight, Clock } from "lucide-react";
import DrawerField from "@/shared/utils/Drawer";
import type { CoachingBatchCardType } from "../coaching-type";

export default function CoachingBatchCard({
  image,
  name,
  subjects,
  start,
  end,
  btnText = "View Details",
  batch,
  path = "#",
}: CoachingBatchCardType) {
  return (
    <article className="group relative w-full bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100">

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        {/* Gradient overlay — always subtle, stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Status badge */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-emerald-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active
        </span>

        {/* Subject count pill — bottom right of image */}
        {subjects?.length > 0 && (
          <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {subjects.length} Subject{subjects.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 gap-4">

        {/* Label + Title */}
        <div>
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.12em] mb-1">
            Coaching Batch
          </p>
          <h3 className="text-[16px] font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Info rows */}
        <div className="flex flex-col gap-2.5">
          {/* Subjects */}
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
              <BookOpen size={13} className="text-blue-500" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Subjects</p>
              <p className="text-xs text-slate-600 font-medium truncate">
                {subjects?.length > 0 ? subjects.map((s) => s.name).join(", ") : "N/A"}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
              <Clock size={13} className="text-violet-500" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Schedule</p>
              <p className="text-xs text-slate-600 font-medium truncate">
                {start} – {end}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mt-auto" />

        {/* CTA row */}
        <div className="flex items-center justify-between pt-1">
          <DrawerField btnText={btnText} batch={batch} />
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-blue-500 transition-colors duration-300 group-hover:translate-x-0.5 transform">
            <ChevronRight size={15} />
          </span>
        </div>
      </div>
    </article>
  );
}
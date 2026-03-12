import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import DrawerField from "@/shared/utils/Drawer";

export default function CoachingBatchCard({
  image,
  name,
  subjects,
  start,
  end,
  btnText = "View Details",
  batch,
}) {
  return (
    <section className="group w-full  bg-white border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full">
      
      {/* Top Section: Image with Badge */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || "/placeholder-batch.jpg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Simple Status Badge (Optional) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm">
          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Active</span>
        </div>
      </div>

      {/* Bottom Section: Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category or Type */}
        <span className="text-[10px] font-bold text-secondary-0 uppercase tracking-[0.1em] mb-1">
          Coaching Batch
        </span>

        {/* Name */}
        <h3 className="font-bold text-slate-800 text-[18px] leading-snug line-clamp-2 mb-4 group-hover:text-secondary-0 transition-colors">
          {name}
        </h3>

        {/* Info Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              <BookOpen size={14} className="text-slate-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-medium">Subjects</span>
              <p className="text-xs text-slate-600 font-semibold truncate">
                {subjects?.length > 0 ? subjects.map(s => s.name).join(", ") : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              <Calendar size={14} className="text-slate-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-medium">Schedule</span>
              <p className="text-xs text-slate-600 font-semibold truncate">
                {start} - {end}
              </p>
            </div>
          </div>
        </div>

        {/* Action: Customizing the feel of DrawerField wrapper */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center justify-between group/btn">
             <DrawerField 
                btnText={btnText} 
                batch={batch} 
              />
             <ArrowRight size={16} className="text-slate-300 -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
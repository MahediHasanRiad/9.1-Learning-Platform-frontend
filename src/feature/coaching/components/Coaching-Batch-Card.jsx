import DrawerField from "@/shared/utils/Drawer";

export default function CoachingBatchCard({
  path,
  image,
  name,
  subjects,
  start,
  end,
  btnText = "View Details",
  batch,
}) {
  return (
    <section className="group w-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-secondary-0 transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={image || "/placeholder-batch.jpg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow space-y-2">
        {/* Name with Truncation */}
        <h3
          className="font-bold text-slate-900 text-base md:text-lg line-clamp-1"
          title={name}
        >
          {name}
        </h3>

        {/* Subjects with comma fix */}
        <div className="text-sm text-slate-600 line-clamp-1">
          <span className="font-semibold text-slate-800">Subject: </span>
          {subjects?.length > 0 ? (
            subjects.map((sub, index) => (
              <span key={sub._id || index}>
                {sub.name}
                {index < subjects.length - 1 ? ", " : ""}
              </span>
            ))
          ) : (
            <span className="text-slate-400">N/A</span>
          )}
        </div>

        {/* Duration */}
        <p className="text-xs md:text-sm text-slate-500 flex items-center gap-1">
          <span className="font-medium text-slate-700">Duration:</span>
          {start} – {end}
        </p>

        {/* Action Button - To open Batch Details */}
        <div className="pt-2 mt-auto">
          <DrawerField btnText={btnText} batch={batch} />
        </div>
      </div>
    </section>
  );
}

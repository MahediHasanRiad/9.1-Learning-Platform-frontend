import { Skeleton } from "@/components/ui/skeleton";

export default function CoachingBatchCardSkeleton() {
  return (
    <article className="relative w-full bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm border border-slate-100">
      
      {/* Image */}
      <div className="relative h-44 bg-slate-100">
        <Skeleton className="w-full h-full rounded-none" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Subject count pill */}
        <div className="absolute bottom-3 right-3">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 gap-4">

        {/* Label + Title */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-24 rounded-md" />
          <Skeleton className="h-5 w-3/4 rounded-md" />
          <Skeleton className="h-5 w-1/2 rounded-md" />
        </div>

        {/* Info rows */}
        <div className="flex flex-col gap-2.5">
          {/* Subjects row */}
          <div className="flex items-start gap-2.5">
            <Skeleton className="mt-0.5 shrink-0 w-7 h-7 rounded-lg" />
            <div className="space-y-1.5 min-w-0 flex-1">
              <Skeleton className="h-2.5 w-14 rounded-md" />
              <Skeleton className="h-3.5 w-2/3 rounded-md" />
            </div>
          </div>

          {/* Schedule row */}
          <div className="flex items-start gap-2.5">
            <Skeleton className="mt-0.5 shrink-0 w-7 h-7 rounded-lg" />
            <div className="space-y-1.5 min-w-0 flex-1">
              <Skeleton className="h-2.5 w-14 rounded-md" />
              <Skeleton className="h-3.5 w-1/2 rounded-md" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mt-auto" />

        {/* CTA row */}
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-8 w-28 rounded-lg" />
          <Skeleton className="h-4 w-4 rounded-sm" />
        </div>
      </div>
    </article>
  );
}
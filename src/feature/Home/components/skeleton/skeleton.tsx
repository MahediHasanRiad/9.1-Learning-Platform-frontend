import { Skeleton } from "@/components/ui/skeleton";

function TeacherCardItemSkeleton() {
  return (
    <div className="block w-full h-36">
      <section className="h-36 flex bg-white border border-gray-100 rounded-2xl overflow-hidden">
        {/* Left Side: Image Skeleton */}
        <div className="w-1/3 h-full">
          <Skeleton className="h-full w-full rounded-none" />
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div className="space-y-2">
            {/* Name */}
            <Skeleton className="h-4 w-3/4 rounded-md" />

            {/* Education */}
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-3 w-3 rounded-sm" />
              <Skeleton className="h-3 w-1/2 rounded-md" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Skeleton className="h-3 w-3 rounded-sm" />
              <Skeleton className="h-3 w-16 rounded-md" />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Skeleton className="h-7 w-28 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeacherCardItemSkeleton;
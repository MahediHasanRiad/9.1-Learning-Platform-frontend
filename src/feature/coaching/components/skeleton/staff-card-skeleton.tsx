import { Skeleton } from "@/components/ui/skeleton";

function StaffCardSkeleton() {
  return (
    <div className="block w-full border border-gray-200 rounded-xl p-3">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Skeleton className="w-20 h-20 rounded-full" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-4 w-24 rounded-md" />
        <Skeleton className="h-3 w-16 rounded-md" />
      </div>
    </div>
  );
}

export default StaffCardSkeleton;
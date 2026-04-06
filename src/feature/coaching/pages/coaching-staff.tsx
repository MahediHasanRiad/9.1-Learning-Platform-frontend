import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import StaffCard from "../components/staff-card";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchStaffThunk } from "../redux/fetch-staff.thunk";
import StaffCardSkeleton from "../components/skeleton/staff-card-skeleton";


function CoachingStaff() {
  const dispatch = useDispatch<AppDispatch>();
  const { staff, loading } = useSelector((state: RootState) => state.coaching);

  useEffect(() => {
    dispatch(fetchStaffThunk());
  }, []);

  return (
    <MainLayout>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <StaffCardSkeleton key={i} />)
        ) : (
          staff?.staff?.map((staff) => (
            <StaffCard
              path={`/user/profile/${staff?.user.id}`}
              img={staff?.user.avatar!}
              name={staff?.name}
              role={staff?.role}
            />
          ))
        )}
      </section>
    </MainLayout>
  );
}

export default CoachingStaff;

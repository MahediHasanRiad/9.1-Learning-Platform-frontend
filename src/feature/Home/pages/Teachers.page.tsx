import PaginationItems from "@/shared/utils/Pagination";
import CardItem from "../components/TeacherCard";
import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import FilterSection from "../components/Filter-section";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchTeachers } from "@/feature/teacher/redux/teachers.thunk";
import TeacherCardItemSkeleton from "../components/skeleton/Teacher-card-item-skeleton";

function TeachersPage() {
  const [filterQuery, setFilterQuery] = useState<QueryParamsType>({
    search: "",
    sortType: "desc",
    page: 1,
    limit: 10,
  });

  const { users, loading, error } = useSelector(
    (state: RootState) => state.teacher,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handlePageChange = (newPage: number) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  // get all teachers
  useEffect(() => {
    dispatch(fetchTeachers(filterQuery));
  }, [dispatch]);

  return (
    <MainLayout>
      <section className="bg-background-0 space-y-6 m-auto">
        {/* filter section */}
        <section>
          <FilterSection setFilterQuery={setFilterQuery} />
        </section>

        {/* teachers profiles */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 items-start">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <TeacherCardItemSkeleton key={i} />
              ))
            : users?.teachers?.map((teacher) => (
                <CardItem
                  key={teacher?.id}
                  path={`/teacher/profile/${teacher?.id}`}
                  image={teacher?.user?.avatar!}
                  name={teacher?.user?.name!}
                  education={teacher?.education!}
                  rating={teacher?.rating!}
                />
              ))}
        </section>

        {/* Pagination */}
        {users?.pagination && (
          <PaginationItems
            totalPage={users?.pagination?.totalPage}
            currentPage={users?.pagination?.page}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </MainLayout>
  );
}

export default TeachersPage;

import PaginationItems from "@/shared/utils/Pagination";
import CardItem from "../components/TeacherCard";
import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import FilterSection from "../components/Filter-section";
import { api } from "@/API/api-client";
import type { AllTeacherType, QueryParamsType } from "@/feature/auth/auth-type";


function TeachersPage() {
  const [allTeachers, setAllTeachers] = useState<AllTeacherType>();
  const [filterQuery, setFilterQuery] = useState<QueryParamsType>({
    search: "",
    sortType: "desc",
    page: 1,
    limit: 10,
  });

  const handlePageChange = (newPage: number) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  // get all teachers
  const fetchTeachers = async (filterQuery: QueryParamsType) => {
    try {
      const { search, limit, page, sortType } = filterQuery as Partial<QueryParamsType>;
      const res = await api.get(
        `/api/v1/teachers?search=${search}&limit=${limit}&page=${page}&sortType=${sortType}`,
        { withCredentials: true },
      );
      setAllTeachers(res.data.data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  useEffect(() => {
    fetchTeachers(filterQuery);
  }, [filterQuery]);

  return (
    <MainLayout>
      <section className="bg-background-0 space-y-6 m-auto">
        {/* filter section */}
        <section>
          <FilterSection setFilterQuery={setFilterQuery} />
        </section>

        {/* teachers profiles */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 items-start">
          {allTeachers?.teachers?.map((teacher) => (
            <CardItem
              key={teacher?.id}
              path={`/teacher/profile/${teacher?.id}`}
              image={teacher?.user?.avatar}
              name={teacher?.user?.name}
              education={teacher?.education}
              rating={teacher?.rating}
            />
          ))}
        </section>

        {/* Pagination */}
        {allTeachers?.pagination && (
          <PaginationItems
            totalPage={allTeachers?.pagination?.totalPage}
            currentPage={allTeachers?.pagination?.page}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </MainLayout>
  );
}

export default TeachersPage;

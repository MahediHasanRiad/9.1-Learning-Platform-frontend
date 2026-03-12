import PaginationItems from "@/shared/utils/Pagination";
import CardItem from "../components/TeacherCard";
import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterSection from "../components/Filter-section";

function TeachersPage() {
  const [allTeachers, setAllTeachers] = useState([]);
  const [filterQuery, setFilterQuery] = useState({
    search: "",
    sortType: "dec",
    sortBy: "updatedAt",
    page: 1,
    limit: 10,
  });

  const handlePageChange = (newPage) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  // get all teachers
  const fetchTeachers = async (query) => {
    try {
      const { search, limit, page, sortBy, sortType } = query;
      const res = await axios.get(
        `/api/v1/teachers?search=${search}&limit=${limit}&page=${page}&sortBy=${sortBy}&sortType=${sortType}`,
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
      <section className="bg-background space-y-6 m-auto">
        {/* filter section */}
        <section>
          <FilterSection />
        </section>

        {/* teachers profiles */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 min-h-screen">
          {allTeachers?.teachers?.map((teacher) => (
            <CardItem
              path={`/teacher/profile/${teacher?._id}`}
              image={teacher?.userId?.avatar}
              name={teacher?.userId?.name}
              education={teacher?.education}
              rating={teacher?.rating}
            />
          ))}
        </section>

        {/* Pagination */}
        {allTeachers?.pagination && (
          <PaginationItems
            totalPage={allTeachers?.pagination?.totalPage}
            currentPage={allTeachers?.page}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </MainLayout>
  );
}

export default TeachersPage;

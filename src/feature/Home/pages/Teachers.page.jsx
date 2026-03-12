import Dropdown from "@/feature/teacher/utils/DropDown";
import PaginationItems from "@/shared/utils/Pagination";
import FilterItems from "@/feature/teacher/utils/filter";
import InputField from "@/shared/utils/input";
import Button from "@/shared/utils/button";
import CardItem from "../components/TeacherCard";
import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import axios from "axios";

function TeachersPage() {
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    (async () => {
      const getTeachers = await axios.get(
        "/api/v1/teachers?page=1&limit=10&sortType=dec&sortBy=updatedAt&search=",
      );
      setAllTeachers(getTeachers.data.data);
    })();
  }, []);

  return (
    <MainLayout>
      <section className="bg-background space-y-6 m-auto">
        {/* filter section */}
        <section>
          <FilterItems
            search={
              <>
                <InputField placeholder={"search..."} />
                <Button text={"Submit"} />
              </>
            }
          >
            {/* children  */}
            <Dropdown
              title="Subject"
              items={["Bangla", "English", "Math", "ICT"]}
            />
            <Dropdown title="Class" items={["10th", "9th", "11th", "12th"]} />
            <Dropdown title="Rating" items={["4.5+", "4.0+", "3.5+", "3.0+"]} />
            <Dropdown title="SortType" items={["asc", "desc"]} />
            <Dropdown title="SortBy" items={["updatedAt"]} />
            <Dropdown title="Limit" items={["10", "25", "50"]} />
          </FilterItems>
        </section>

        {/* teachers profiles */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
        <PaginationItems />
      </section>
    </MainLayout>
  );
}

export default TeachersPage;

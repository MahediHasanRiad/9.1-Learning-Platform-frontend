import Dropdown from "@/feature/teacher/utils/DropDown";
import PaginationItems from "@/shared/utils/Pagination";
import FilterItems from "@/feature/teacher/utils/filter";
import InputField from "@/shared/utils/input";
import Button from "@/shared/utils/button";
import CardItem from "../../teacher/utils/Card";
import MainLayout from "@/layout/Main-Layout";

function TeachersPage() {
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
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <CardItem
            
            path="terachers/teachersProfile"
            image={"/public/cover-image.jpg"}
            name={"Mahedi Hasan Riad"}
            subjects={"Math, English, Bangla"}
            availableTime={"Sun - Fri 5pm to 9pm"}
            rating="4.5"
          />
          <CardItem
            path="terachers/teachersProfile"
            image={"/public/cover-image.jpg"}
            name={"Mahedi Hasan Riad"}
            subjects={"Math, English, Bangla"}
            availableTime={"Sun - Fri 5pm to 9pm"}
            rating="4.5"
          />
        </section>

        {/* Pagination */}
        <PaginationItems />
      </section>
    </MainLayout>
  );
}

export default TeachersPage;

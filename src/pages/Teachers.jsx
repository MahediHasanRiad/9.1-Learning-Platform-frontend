import Dropdown from "@/utils/DropDown";
import Card from "../components/feature/Teachers/Card";
import PaginationItems from "@/utils/Pagination";
import FilterItems from "@/utils/filter";
import InputField from "@/utils/input";
import Button from "@/utils/button";

function TeachersPage() {
  return (
    <div className="bg-background space-y-6 w-5/6 m-auto">
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
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
        <Card
          image={""}
          name={"Mahedi Hasan Riad"}
          subjects={"Math, English, Bangla"}
          availableTime={"Sun - Fri 5pm to 9pm"}
          rating="4.5"
        />
      </section>

      {/* Pagination */}
      <PaginationItems />
    </div>
  );
}

export default TeachersPage;

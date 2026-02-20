import Card from "../components/feature/Teachers/Card";
import PaginationItems from "@/utils/Pagination";
import FilterItems from "@/utils/filter";

function TeachersPage() {
  return (
    <div className="bg-background space-y-6 w-5/6 m-auto">
      {/* filter section */}
      <FilterItems />

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

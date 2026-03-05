import CoachingBatchCard from "@/feature/coaching/components/CoachingBatchCard";
import MainLayout from "@/layout/Main-Layout";


function TeacherEnrolledBatch({}) {
  return (
    <MainLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <CoachingBatchCard
          image={"/public/cover-image.jpg"}
          name={"Batch Alfa new"}
          classes={"Class-8"}
          subjects={["Math, English, Bangla"]}
          start={"12-02-2026"}
          end={"16-08-2026"}
        />
      </section>
    </MainLayout>
  );
}

export default TeacherEnrolledBatch;

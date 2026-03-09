import {
  BookUser,
  Clock7,
  Contact,
  Facebook,
  Linkedin,
  Mail,
  UserRoundPen,
} from "lucide-react";
import InfoMenuButton from "../utils/info-menu-btn";
import { useCoachingInfo } from "../hooks/useCoachingInfo";
import InfoMenuItem from "../utils/info-menu-item";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import TeacherCard from "./teachersCard";

function CoachingInfo({coaching}) {
  const {
    about,
    handleAbout,
    batch,
    handleBatch,
    teacher,
    handleTeacher,
    admin,
    handleAdmin,
  } = useCoachingInfo();
console.log('d', coaching)
  return (
    <section>
      <section className="h-15 w-full mx-auto flex items-center border-b">
        <InfoMenuButton text={"About"} active={about} onClick={handleAbout} />
        <InfoMenuButton text={"Batch"} active={batch} onClick={handleBatch} />
        <InfoMenuButton
          text={"Teachers"}
          active={teacher}
          onClick={handleTeacher}
        />
        <InfoMenuButton text={"Admin"} active={admin} onClick={handleAdmin} />
      </section>

      {/* about  */}
      {about && (
        <section className="mt-4">
          <InfoMenuItem Icon={BookUser} text={coaching?.address} />
          <InfoMenuItem Icon={Contact} text={coaching?.mobile} />
          <InfoMenuItem Icon={Clock7} text={coaching?.officeTime} />
          <InfoMenuItem Icon={Mail} text={coaching?.email} />
          <InfoMenuItem Icon={Linkedin} text={coaching?.linkedIn} />
          <InfoMenuItem Icon={Facebook} text={coaching?.facebook} />
        </section>
      )}

      <section className="mt-4">
        {/* batches  */}
        {batch && (
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CoachingBatchCard
              image={"/public/cover-image.jpg"}
              name={"Batch Alfa new"}
              classes={"Class-8"}
              subjects={["Math, English, Bangla"]}
              rating={"4.5"}
            />
            <CoachingBatchCard
              image={"/public/cover-image.jpg"}
              name={"Batch Alfa new"}
              classes={"Class-8"}
              subjects={["Math, English, Bangla"]}
              rating={"4.5"}
            />
          </section>
        )}

        {/* teachers  */}
        {teacher && (
          <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <TeacherCard image={"/public/riad.png"} name={"Mahedi Hasan"} />
            <TeacherCard image={"/public/riad.png"} name={"Hasan Hossain"} />
            <TeacherCard image={"/public/riad.png"} name={"Hasan Hossain"} />
            <TeacherCard image={"/public/riad.png"} name={"Hasan Hossain"} />
            <TeacherCard image={"/public/riad.png"} name={"Hasan Hossain"} />
            <TeacherCard image={"/public/riad.png"} name={"Hasan Hossain"} />
            <TeacherCard image={"/public/riad.png"} name={"Riad"} />
          </section>
        )}

        {/* Admin  */}
        {admin && (
          <section>
            <InfoMenuItem Icon={UserRoundPen} text={"Mahedi Hasan Riad"} />
            <InfoMenuItem Icon={Mail} text={"riad@gmail.com"} />
            <InfoMenuItem Icon={Contact} text={"01518949131"} />
            <InfoMenuItem Icon={Linkedin} text={"rst/abc.com"} />
            <InfoMenuItem Icon={Facebook} text={"rst/abc.com"} />
          </section>
        )}
      </section>
    </section>
  );
}

export default CoachingInfo;

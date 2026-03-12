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
import { useEffect, useState } from "react";
import axios from "axios";

function CoachingInfo({ coaching }) {
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

  const [allBatch, setAllBatch] = useState([]);
  const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    (async () => {
      // all batch
      const allBatch = await axios.get(`/api/v1/allBatches`, {
        withCredentials: true,
      });
      setAllBatch(allBatch.data.data);

      // all teachers
      const allTeachers = await axios.get(
        `/api/v1/coaching-staffs?role=Teacher`,
        { withCredentials: true },
      );
      setTeachers(allTeachers.data.data);
    })();
  }, []);

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
            {allBatch?.batch?.map((batch) => (
              <CoachingBatchCard
                key={batch?._id}
                path={batch?.Batch_link}
                image={batch?.coverImage}
                name={batch?.name}
                subjects={batch?.subjects}
                start={batch?.start_date}
                end={batch?.end_date}
                batch={batch}
              />
            ))}
          </section>
        )}

        {/* teachers  */}
        {teacher && (
          <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {teachers?.staff?.map((teacher) => (
              <TeacherCard
                key={teacher._id}
                path={`/user/profile/${teacher.userId}`}
                image={teacher.avatar}
                name={teacher.name}
              />
            ))}
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

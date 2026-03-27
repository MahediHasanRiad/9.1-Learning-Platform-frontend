import {
  UserRoundPen,
  BookUser,
  Contact,
  Mail,
  Linkedin,
  Facebook,
  GraduationCap,
} from "lucide-react";
import InfoMenuItem from "../../user/utils/info-menu-item";
import InfoMenuButton from "../../user/utils/info-menu-btn";
import { useTeacherInfo } from "../../user/hooks/useTeacherInfo";
import DemoClass from "@/feature/teacher/utils/DemoClass";
import Dropdown from "@/feature/teacher/utils/DropDown";
import Achivement from "./achivement";
import type { TeacherSliceType } from "../teacher-type";

interface TeacherInfoType {
  user: TeacherSliceType
}

function TeacherInfo({ user }: TeacherInfoType) {
  // custom hook
  const {
    about,
    handleAbout,
    achivement,
    handleAchivement,
    demoClass,
    handleDemoClass,
  } = useTeacherInfo();

  return (
    <section>
      <section className="h-15 flex items-center border-b">
        <InfoMenuButton text={"About"} active={about} onClick={handleAbout} />
        <InfoMenuButton
          text={"Achivement"}
          active={achivement}
          onClick={handleAchivement}
        />
        <InfoMenuButton
          text={"demoClass"}
          active={demoClass}
          onClick={handleDemoClass}
        />
      </section>
      {/* about  */}
      {about && (
        <section className="mt-4">
          <InfoMenuItem Icon={UserRoundPen} text={user?.userId?.name} />
          <InfoMenuItem Icon={BookUser} text={user?.userId?.address} />
          <InfoMenuItem Icon={Contact} text={user?.userId?.mobile} />
          <InfoMenuItem Icon={GraduationCap } text={user?.education} />
          <InfoMenuItem Icon={Mail} text={user?.userId?.email} />
          <InfoMenuItem Icon={Linkedin} text={user?.userId?.linkedIn} />
          <InfoMenuItem Icon={Facebook} text={user?.userId?.facebook} />
        </section>
      )}

      {/* achivement  */}
      {achivement && <Achivement user={user} />}

      {/* demo class  */}
      {demoClass && (
        <section>
          <section className="space-y-3">
            <section className="flex-row justify-between space-y-3 lg:flex lg:my-4">
              <div></div>
              {/* Filter  */}
              <div className="flex gap-3">
                <Dropdown
                  title={"Class"}
                  items={["Class 9", "Class 10", "Honors"]}
                />
                <Dropdown
                  title={"Subject"}
                  items={["ICT", "Math 1st", "English 1st"]}
                />
              </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DemoClass
                video={
                  "https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
                }
                title={"Bangla 1st Papper"}
              />
              <DemoClass
                video={
                  "https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
                }
                title={"Bangla 1st Papper"}
              />
              <DemoClass
                video={
                  "https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
                }
                title={"Bangla 1st Papper"}
              />
            </section>
          </section>
        </section>
      )}
    </section>
  );
}

export default TeacherInfo;

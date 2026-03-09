import {
  UserRoundPen,
  BookUser,
  Contact,
  Mail,
  Linkedin,
  Facebook,
  Award,
  ShieldCheck,
  Calendar1,
  Clock7,
} from "lucide-react";
import InfoMenuItem from "../../user/utils/info-menu-item";
import InfoMenuButton from "../../user/utils/info-menu-btn";
import { useTeacherInfo } from "../../user/hooks/useTeacherInfo";
import DemoClass from "@/feature/teacher/utils/DemoClass";
import Dropdown from "@/feature/teacher/utils/DropDown";

function TeacherInfo({ user, teacher }) {
  // custom hook
  const {
    about,
    handleAbout,
    achivement,
    handleAchivement,
    demoClass,
    handleDemoClass,
  } = useTeacherInfo();
console.log('t', teacher)
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
          <InfoMenuItem Icon={UserRoundPen} text={user?.name} />
          <InfoMenuItem Icon={BookUser} text={user?.address} />
          <InfoMenuItem Icon={Contact} text={user?.mobile} />
          <InfoMenuItem Icon={Mail} text={user?.email} />
          <InfoMenuItem Icon={Linkedin} text={user?.linkedIn} />
          <InfoMenuItem Icon={Facebook} text={user?.facebook} />
        </section>
      )}

      {/* achivement  */}
      {achivement && (
        <section className="space-y-2 mt-4">
          <div>
            <span className="flex items-center">
              <Award className="mx-2" size={18} /> experience or years:{" "}
              {teacher?.experience}
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <ShieldCheck className="mx-2" size={18} /> certificates: 
              {teacher.certificate.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
              
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <Calendar1 className="mx-2" size={18} />
              Available Day: {teacher?.availableDay}
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <Clock7 className="mx-2" size={18} />
              Available Time: {teacher?.availableTime}
            </span>
          </div>
        </section>
      )}

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

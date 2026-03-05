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
import InfoMenuItem from "../utils/info-menu-item";
import InfoMenuButton from "../utils/info-menu-btn";
import { useTeacherInfo } from "../hooks/useTeacherInfo";
import DemoClass from "@/feature/teacher/utils/DemoClass";
import Dropdown from "@/feature/teacher/utils/DropDown";

function TeacherInfo() {
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
          <InfoMenuItem Icon={UserRoundPen} text={"Mahedi Hasan Riad"} />
          <InfoMenuItem Icon={BookUser} text={"Uttora, Dhaka 1208"} />
          <InfoMenuItem Icon={Contact} text={"01518949131"} />
          <InfoMenuItem Icon={Mail} text={"riad@gmail.com"} />
          <InfoMenuItem Icon={Linkedin} text={"rst/abc.com"} />
          <InfoMenuItem Icon={Facebook} text={"rst/abc.com"} />
        </section>
      )}

      {/* achivement  */}
      {achivement && (
        <section className="space-y-2 mt-4">
          <div>
            <span className="flex items-center">
              <Award className="mx-2" size={18} /> experience or years: 5
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <ShieldCheck className="mx-2" size={18} /> certificates: [
              <span>Link 1</span>
              <span>Link 1</span>
              <span>Link 1</span>]{" "}
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <Calendar1 className="mx-2" size={18} />
              Available Day: [ "Sat" "Sun" "Mon" ]
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <Clock7 className="mx-2" size={18} />
              Available Time: [ Schedule 1 : 10am - 12pm ]
            </span>
          </div>
        </section>
      )}

      {/* demo class  */}
      {demoClass && (
        <section>
          <section className="space-y-3">
            <section className="flex-row justify-between space-y-3 lg:flex lg:my-4">
              <div>
                
              </div>
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

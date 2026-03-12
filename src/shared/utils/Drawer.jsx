import { Button } from "@/components/ui/button";
import {
  BadgePercent,
  CalendarCheck,
  CopySlash,
  Database,
  StretchHorizontal,
} from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DrawerItem from "../components/drawer-item";
import { BookOpen } from "lucide-react";
import DrawerInstructor from "../components/drawer-instructor";
import DrawerSubject from "../components/drawer-subject";

export function DrawerField({ btnText, batch }) {

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="w-full py-6 bg-primary-0 hover:text-white hover:bg-secondary-0 rounded-xl shadow-sm transition-all duration-200 text-sm font-semibold tracking-wide">
          {btnText}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full ml-auto w-full md:w-[480px] rounded-l-2xl border-none bg-white shadow-2xl">
        <div className="h-full overflow-y-auto no-scrollbar flex flex-col">
          <DrawerHeader className="p-0 relative group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src={batch?.coverImage}
              alt={batch?.name}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </DrawerHeader>

          <section className="p-6 md:p-8 space-y-8 flex-1">
            {/* Title & Bio Section */}
            <header className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                <span className="p-2 rounded-lg shrink-0">
                  <BookOpen className="w-6 h-6 text-primary-0" />
                </span>
                {batch?.name}
              </h1>
              <p className="text-sm leading-relaxed text-slate-500 font-medium">
                {batch?.bio}
              </p>
            </header>

            {/* Info Grid  */}
            <div className="space-y-6 pl-1">
              {/* Instructor  */}
              {/* Instructor Item - Multiple Profiles */}
              <div className="flex items-start gap-4 py-3 group">
                {/* আইকন বক্স */}
                <div className="flex shrink-0 items-center justify-center bg-primary-0/5 border border-primary-0/10 p-3 rounded-xl">
                  <CopySlash
                    size={20}
                    className="text-primary-0"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Instructors {batch?.assignedTeachers?.length}
                  </span>

                  {/* Assigned Teachers */}
                  <DrawerInstructor
                    assignedTeachers={batch?.assignedTeachers}
                  />
                </div>
              </div>

              {/* Subjects Section */}
              <DrawerSubject subjects={batch?.subjects} />

              {/* Other Details  */}
              <div className="grid grid-cols-1 gap-5">
                <DrawerItem
                  Icon={Database}
                  label={"Batch Duration"}
                  text={`${batch?.start_date} - ${batch?.end_date}`}
                />
                <DrawerItem
                  Icon={StretchHorizontal}
                  label={"Seat Capacity"}
                  text={batch?.capacity}
                />
                <DrawerItem
                  Icon={CalendarCheck}
                  label={"Schedule"}
                  text={batch?.recurringRule}
                />

                {/* Highlighted Price Tag */}
                <div className="mt-4 p-4 bg-primary-50/50 border border-primary-100 rounded-2xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <BadgePercent className="text-primary-600" />
                    <span className="text-sm font-bold text-slate-700">
                      Course Fee
                    </span>
                  </div>
                  <span className="text-xl font-black text-primary-700">
                    {batch?.price}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <DrawerFooter className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-slate-100 p-6 space-y-3">
            <Button className="w-full py-6 bg-primary-0 hover:bg-secondary-0 rounded-xl font-bold text-base shadow-lg shadow-primary-200 transition-all active:scale-[0.98]">
              Enrolled
            </Button>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                className="w-full py-6 text-slate-400 hover:text-slate-600 font-medium"
              >
                Maybe Later
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerField;

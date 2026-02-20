import DemoClass from "@/components/feature/Teacher-Profile/DemoClass";
import Image from "@/components/feature/Teacher-Profile/image";
import InfoItem from "@/components/feature/Teacher-Profile/info-item";
import Dropdown from "@/utils/DropDown";
import Player from "@/utils/video-player";
import React from "react";

function TeacherProfile() {
  return (
    <section>
      {/* ---------------------------- Info -------------------------------------- */}
      <section className="max-w-4xl mx-auto p-4">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Image */}
          <Image image={'/public/riad.png'} alt="Teacher" />

          {/* Info */}
          <div className="md:col-span-2 space-y-3">
            {/* Name */}
            <h2 className="text-xl font-semibold text-text">
              Mahedi Hasan Riad
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-600">
              <InfoItem name={"Education"} description={"MA Math, BSc in CS"} />
              <InfoItem
                name={"Certificates"}
                description={"Management, Math Olympiad"}
              />
              <InfoItem name={"Available Days"} description={"Fri, Sat, Mon"} />
              <InfoItem name={"Time"} description={"5pm - 9pm"} />
              <InfoItem name={"Contact"} description={"+8801518949131"} />
              <InfoItem name={"Rating"} description={"⭐ 4.5"} />
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------- Demo-Class ------------------------- */}
      <section className="space-y-3">
        <section className="flex-row justify-between space-y-3 lg:flex lg:my-4">
          <div>
            <h1 className="text-3xl font-semibold">Demo-Classes</h1>
          </div>
          {/* Filter  */}
          <div className="flex gap-3">
              <Dropdown title={'Class'} items={['Class 9', 'Class 10', 'Honors']} />
              <Dropdown title={'Subject'} items={['ICT', 'Math 1st', 'English 1st']} />
          </div>
        </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
           <DemoClass video={"https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"} title={'Bangla 1st Papper'} />
      </section>
      </section>
    </section>
  );
}

export default TeacherProfile;

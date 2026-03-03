import Button from "@/shared/components/button";
import React, { useState } from "react";
import UserInfo from "../components/user-info";

function Profile() {

  const [user, setUser] = useState(true)
  const [teacher, setTeacher] = useState(false)
  const [coaching, setCoaching] = useState(false)



  return (
    <section className="w-2/3 mx-auto">
      {/* cover-image  */}
      <section>
        <img
          src="/public/cover-image.jpg"
          alt="coverImage"
          className="w-full object-full rounded-md h-55"
        />
      </section>
      <section className="">
      {/* profile & bio  */}
        <section className="grid md:grid-cols-2">
          <div>
            <img
              src="/public/riad.png"
              alt="profile"
              className="rounded-full object-cover w-40 h-40 ring mt-4"
            />
          </div>
          <div className="p-6">
            <h4 className="text-sm my-2">Bio..</h4>
          </div>
        </section>
        {/* info  */}
        <section className="mt-4">
            {user && <UserInfo />}
        </section>
      </section>
    </section>
  );
}

export default Profile;

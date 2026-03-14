import React from "react";
import img from '../../../../../public/images/Decision.png'

function FindTeacher() {
  return (
    <section className="grid md:grid-cols-2 items-center my-10">
      <div>
        <img src={img} alt="" className="w-2/3 mx-auto" />
      </div>
      <div className="p-6 md:p-8 space-y-4">
        <h1 className="italic text-2xl">Finding the Right Teacher Is Hard</h1>
        <p>
          Most guardians choose tutors based on advertisements or
          recommendations without knowing how the teacher actually teaches. This
          leads to poor learning experiences and wasted time.
        </p>
      </div>
    </section>
  );
}

export default FindTeacher;

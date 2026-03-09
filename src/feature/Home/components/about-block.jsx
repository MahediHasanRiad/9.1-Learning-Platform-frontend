import React from "react";

function BlogSection() {
  return (
    <section className="grid md:grid-cols-2 items-center my-16">
      <div className="">
        <img src="/public/best-tutor.svg" alt="" className="w-60" />
      </div>
      <div>
        <p className="italic">
          Choosing the right teacher shouldn’t <br /> be based on guesswork.
        </p>
      </div>
    </section>
  );
}

export default BlogSection;

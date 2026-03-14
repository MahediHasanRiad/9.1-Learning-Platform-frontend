import Button from "@/shared/utils/button";
import React from "react";
import img from '../../../../../public/images/home-hero.png'


function TopHero() {
  return (
    <section className="grid md:grid-cols-2 items-center">
      {/* img  */}
      <section className="w-full md:hidden">
        <img src={img} alt="" className="w-2/3 mx-auto" />
      </section>
      {/* info  */}
      <section className="w-full p-6 md:p-6 lg:p-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Choose Teachers Based on Real Teaching , Not Marketing
          </h1>
          <p className="text-center">
            Watch <b>demo classes</b>, explore <b>tutor profiles</b>, and{" "}
            <b>compare coaching centers</b> before making the right decision.
          </p>
        </div>
        <div className="space-x-4 my-6 flex justify-center">
          <Button text={"Explore Tutor"} bg="primary-0" />
          <Button text={"Watch Demo Classes"} bg="primary-0" />
        </div>
      </section>

      {/* img  */}
      <section className="w-full hidden md:block">
        <img src={img} alt="" className="w-2/3 mx-auto" />
      </section>
    </section>
  );
}

export default TopHero;

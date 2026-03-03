import React from "react";
import Info from "@/feature/coaching/components/Coaching-Profile/info";
import TopImagees from "@/feature/coaching/components/Coaching-Profile/top-image";
import Teachers from "@/feature/coaching/components/Coaching-Profile/teachers";
import Batch from "@/feature/coaching/components/Coaching-Profile/batch";

function CoachingProfile() {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 space-y-5">
      {/* Cover Section */}
      <TopImagees />

      {/* Info Section */}
      <Info />

      {/* subjects section */}
      <Teachers />

      {/* Batch section */}
      <Batch />
    </section>
  );
}

export default CoachingProfile;
